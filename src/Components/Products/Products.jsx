import React, { useEffect, useState } from 'react';
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
    const [selectedItem, setSelectedItem] = useState(0)
    const func = () => {
        setSelectedItem(selectedItem + 1)
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