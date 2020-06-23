import React from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css';

const navbar = () => {
    return (
        <header>
        <div className="brand-logo">
        <a href='/'>
            <img src={require('../../assets/images/logo.jpg')} alt='logo'/><h1>Hacker News</h1>   
        </a>          
        </div>
      
        <input type="checkbox" id="toggle-btn"/>
        <label htmlFor="toggle-btn" className="show-menu-btn"><i className="fas fa-bars"></i></label>
        <nav>
            <ul className="navigation">
                <li><a href='./newest'> new </a></li>
                <li><NavLink to='/new'> past </NavLink></li>
                <li><NavLink to='/new'> comments </NavLink></li>
                <li><a href='/ask'> ask </a> </li>
                <li><a href='/show'> show </a></li>
                <li><a href='/jobs'> jobs </a></li>
                <li><NavLink to='/new'> submit </NavLink></li>
                <li><NavLink to='/new' className="login"> Login </NavLink></li>
                <label htmlFor="toggle-btn" className="hide-menu-btn"><i className="fas fa-times"></i></label>
            </ul>
        </nav>
      </header>
    );
}

export default navbar;