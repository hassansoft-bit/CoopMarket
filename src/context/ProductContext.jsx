import React, { createContext, useContext, useState } from 'react';
import { products as initialProducts } from '../data/mockData';

const ProductContext = createContext();

export const useProducts = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState(initialProducts);

    const addProduct = (newProduct) => {
        setProducts(prevProducts => [newProduct, ...prevProducts]);
    };

    const deleteProduct = (id) => {
        setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
    };

    return (
        <ProductContext.Provider value={{ products, addProduct, deleteProduct }}>
            {children}
        </ProductContext.Provider>
    );
};
