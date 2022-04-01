import React, { useEffect, useState } from 'react';
import { addToDb, getCartItem } from '../../Database/database';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([])
    const [selectedItem, setSelectedItem] = useState([])
    
    useEffect(() => {
        fetch('products.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    }, [])
    
    useEffect(() => {
        const storedItem = getCartItem()
        let newCart = [];
        for (const id in storedItem) {
            const storedPro = products.find(product => product.id === id)
            if (storedPro) {
                const quantity = storedItem[id]
                storedPro.quantity = quantity
                newCart.push(storedPro)
            }
        }
        setSelectedItem(newCart)
    }, [products])
    
    
    const func = (selectedProduct) => {
        let updatedItem = [];
        const exist = products.find(product => product.id === selectedProduct.id)
        if (!exist) { 
            selectedProduct.quantity = 1
            updatedItem = [...selectedItem, selectedProduct]
        }
        else {
            const rest = products.filter(product => product.id !== selectedProduct.id)
            exist.quantity = exist.quantity + 1
            updatedItem = [...rest, exist]
        }
        setSelectedItem(updatedItem)
        addToDb(selectedProduct.id)
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