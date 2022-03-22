import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    }, [])
    console.log(products);
    return (
        <div>
            <div className="products">
                { products.map(product => <Product key={product.id} product={product}></Product>)}
            </div>
            <div className="cart"></div>
        </div>
    );
};

export default Products;