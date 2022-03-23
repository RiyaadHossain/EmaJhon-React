import React from 'react';
import './Cart.css'

const Cart = ({selectedItem}) => {
    return (
        <div className='cart-container'>
            <h3 className='title'>Order Summary</h3>
            <div  className='cart-body'>
                <p className='cart-info'>Selected Items: {selectedItem}</p>
                <p className='cart-info'>Total Price: $1140</p>
                <p className='cart-info'>Total Shipping Charge: $5</p>
                <p className='cart-info'>Tax: $114</p>
                <p className='cart-total'>Grand Total: $1559</p>
            </div>
        </div>
    );
};

export default Cart;