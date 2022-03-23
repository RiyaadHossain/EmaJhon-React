import React, { useEffect, useState } from 'react';
import { addToDb, getCartItem } from '../../Database/database';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    }, [])
    
    useEffect(() => {
        const storedItem = getCartItem()
        for (const id in storedItem) {
            const storedPro = products.find(product => product.id === id)
            console.log(storedPro);
        }
    }, [products])
    
    const [selectedItem, setSelectedItem] = useState([])
    const func = (product) => {
        const updatedItem = [...selectedItem, product]
        setSelectedItem(updatedItem)
        addToDb(product.id)
    }

    
    return (
        <div className='shopping-layout'>
            <div className="products">
                { products.map(product => <Product key={product.id} func={func} product={product}></Product>)}
            </div>
            <div className="cart">
            <Cart selectedItem={selectedItem}></Cart>
            </div>
        </div>
    );
};

export default Products;