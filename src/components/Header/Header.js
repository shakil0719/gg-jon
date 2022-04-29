import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />

            <div>
            <a href='/HOME'>home</a>
            <a href='/ABOUT'>about</a>
            <a href='/US'>us</a>
        </div>
   
        </nav>
         );
       
};

export default Header;