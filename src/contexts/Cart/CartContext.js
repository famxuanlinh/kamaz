import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const CartContext = React.createContext();
export const CartProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

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
    const getDataToLocalStorage = (data) => {
        const dataString = window.localStorage.getItem('cart');
        const dataObject = JSON.parse(dataString);

        if (dataObject && Array.isArray(dataObject)) {
            setProducts(dataObject);
        }
    };

    useEffect(() => {
        getDataToLocalStorage();
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
