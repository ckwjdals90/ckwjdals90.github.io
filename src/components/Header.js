import React from 'react';
import { Link } from 'react-router';
import './Header.css';

const MenuItem = ({active, children, to}) => (
    <Link to={to} className="menu-item">
            {children}
    </Link>
)

const Header = () => {
    return (
        <div>
            <div className="logo">
                Jungmin Cha
            </div>
            <div className="menu">
                <MenuItem to={'/'}>Home</MenuItem>
                <MenuItem to={'/about'}>About</MenuItem>
                <MenuItem to={'/portfolio'}>Protfolio</MenuItem>
                <MenuItem to={'/contact'}>Contact</MenuItem>
            </div>
        </div>
    );
};

export default Header;
