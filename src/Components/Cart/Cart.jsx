import React from 'react';
import './Cart.css'

const Cart = ({ selectedItem }) => {
    let total = 0
    let shipping = 0
    let quantity = 0;
    for (const item of selectedItem) {
        quantity = quantity + item.quantity
        total = total + item.price * item.quantity
        shipping = shipping + item.shipping
    }
    let tax = parseFloat((total * 0.1).toFixed(2))
    let grandTotal = total + shipping + tax
    return (
        <div className='cart-container'>
            <h3 className='title'>Order Summary</h3>
            <div  className='cart-body'>
                <p className='cart-info'>Selected Items: {quantity}</p>
                <p className='cart-info'>Total Price: ${total}</p>
                <p className='cart-info'>Total Shipping Charge: ${shipping}</p>
                <p className='cart-info'>Tax: ${tax}</p>
                <p className='cart-total'>Grand Total: ${grandTotal}</p>
            </div>
        </div>
    );
};

export default Cart;