import React, { useContext, useState } from 'react';

const CartContext = React.createContext();
export const CartProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const handleAddToCart = (data) => {
        const exits = products.find((product) => product.id === data.id);
        if (exits) {
            const newProducts = products.map((product) =>
                product.id === data.id ? { ...product, qty: product.qty + data.qty } : product,
            );
            setProducts(newProducts);
        } else {
            const newProducts = [...products, data];
            setProducts(newProducts);
        }
    };

    return <CartContext.Provider value={{ handleAddToCart, products }}> {children}</CartContext.Provider>;
};

export const useCart = () => {
    return useContext(CartContext);
};

export default CartContext;
