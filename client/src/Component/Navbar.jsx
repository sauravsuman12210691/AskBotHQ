import React from "react";
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import '../CSS/Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="checkbtn">
                <span className="material-symbols-outlined" id="ham">menu</span>
            </label>
            <Link to='/'><img src={Logo} alt="Logo" className="logo" /></Link>
            <div className='menu'>
                <Link to='/' className="s">Home</Link>
                <Link to='/about' className="s">About</Link>
                <Link to='/contact' className="s">Contact</Link>
                <Link to='/login' className='g'>Get Started</Link>
            </div>
        </div>
    );
}

export default Navbar;

/* <div className="search-container">
<input type="text" name="search" placeholder="Search..." className="search-input" />
<i className="fas fa-search"></i>
</div> */