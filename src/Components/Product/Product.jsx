import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart  } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = ({product, func}) => { 
    const { name, img, price, ratings, seller } = product
    return (
        <div className='card'>
            <div className="img"><img src={img} alt="" /></div>
            <div className="card-body">
                <p className='product-title'>{name}</p>
                <p className='product-price'>Price: ${price}</p>
                <div className='extra-info'>
                    <p>Manufacturer: {seller}</p>
                    <p>Ratting: {ratings} ⭐</p>
                </div>
            </div>
            <button onClick={() => func(product)} className='btn'><p>Add to Cart</p><FontAwesomeIcon icon={faShoppingCart } /></button>
        </div>
    );
};

export default Product;