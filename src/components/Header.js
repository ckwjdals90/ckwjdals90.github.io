import React from 'react';
import './Header.css';

const MenuItem = ({active, children, to}) => (
    <div className="menu-item">
            {children}
    </div>
)

const Header = () => {
    return (
        <div>
            <div className="logo">
                Jungmin Cha
            </div>
            <div className="menu">
                <MenuItem>Home</MenuItem>
                <MenuItem>About</MenuItem>
                <MenuItem>Protfolio</MenuItem>
                <MenuItem>Contact</MenuItem>
            </div>
        </div>
    );
};

export default Header;
