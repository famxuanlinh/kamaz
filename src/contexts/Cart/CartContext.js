import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import { BASE_URL } from '~/constants/env';
import { useLogin } from '../Login/LoginContext';

const CartContext = React.createContext();
export const CartProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [orderInfo, setOrderInfo] = useState([]);
    const { userInfo } = useLogin();

    let history = useNavigate();

    // const [productsWishlist, setProductsWishlist] = useState([]);
    // const handleAddToWishlist = (data) => {
    //     const exits = products.find((product) => product.id === data.id);

    //     if (exits) {
    //         const newProducts = products.map((product) =>
    //             product.id === data.id ? { ...product, qty: product.qty + data.qty } : product,
    //         );
    //         setProducts(newProducts);
    //     } else {
    //         const newProducts = [...products, data];
    //         setProducts(newProducts);
    //     }
    // };

    const handleAddToCart = (data, qty) => {
        const exits = products.find((product) => product.id === data.id);
        if (exits) {
            const newProducts = products.map((product) =>
                product.id === data.id ? { ...product, qty: product.qty + qty } : product,
            );
            setProducts(newProducts);
        } else {
            const newProducts = [...products, { ...data, qty }];
            setProducts(newProducts);
            setDataToLocalStorage(newProducts);
        }
        toast.success('Thêm Vào Giỏ Hàng Thành Công');
    };

    const handleUpdateCart = (productId, newQty) => {
        const newProducts = products.map((product) => {
            if (product.id === productId) {
                return {
                    ...product,
                    qty: newQty,
                };
            } else {
                return product;
            }
        });
        setProducts(newProducts);
        setDataToLocalStorage(newProducts);
    };

    const handleCheckout = () => {
        const code = uuidv4();
        const payload = {
            code,
            orderBy: `${userInfo.id}`,
            products: products,
        };

        fetch(`${BASE_URL}/orders?filters[orderBy]=${userInfo.id}`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${userInfo.jwt}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: payload }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.data?.id) {
                    history(`/don-hang/${data?.data?.attributes.code}?type=thank`);
                }
                setOrderInfo(data?.data);
                toast.success('Đã Đặt Hàng Thành Công');
                setProducts([]);
                setDataToLocalStorage([]);
            });
    };

    const handleDeleteItemInCart = (productId) => {
        const newProducts = products.filter((product) => product.id !== productId);
        setProducts(newProducts);
        setDataToLocalStorage(newProducts);
    };

    //Lưu lên localstorage
    const setDataToLocalStorage = (data) => {
        window.localStorage.setItem('cart', JSON.stringify(data));
    };

    //Lấy về từ local storage
    const getDataFromLocalStorage = (data) => {
        const dataString = window.localStorage.getItem('cart');
        const dataObject = JSON.parse(dataString);

        if (dataObject && Array.isArray(dataObject)) {
            setProducts(dataObject);
        }
    };

    useEffect(() => {
        getDataFromLocalStorage();
    }, []);

    const totalQty = products.reduce((prev, product) => prev + product.qty, 0);

    const totalQtyProducts = products.length;
    const totalMoneyCart = products.reduce((prev, product) => prev + product.qty * product.attributes.price, 0);

    // const handleAddToWishlist = (data) => {
    //     const exits = productsWishlist.find((product) => product.id === data.id);
    //     if (exits) {
    //         const newProductsWishlist = productsWishlist.map((product) =>
    //             product.id === data.id ? { ...product, qty: product.qty + data.qty } : product,
    //         );
    //         setProductsWishlist(newProductsWishlist);
    //     } else {
    //         const newProductsWishlist = [...productsWishlist, data];
    //         setProductsWishlist(newProductsWishlist);
    //     }
    // };

    return (
        <CartContext.Provider
            value={{
                handleAddToCart,
                products,
                handleUpdateCart,
                totalQty,
                totalQtyProducts,
                totalMoneyCart,
                handleDeleteItemInCart,
                handleCheckout,
                orderInfo,
            }}
        >
            {' '}
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};

export default CartContext;
