import React from 'react';
import './Header.css'
import Logo from '../../Images/Logo.svg'

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'><img src={Logo} alt="" /></div>
            <div className='nav'>
                <li><a href="/home">Order</a></li>
                <li><a href="/home">Order Review</a></li>
                <li><a href="/home">Manage Inventory</a></li>
            </div>
        </div>
    );
};

export default Header;