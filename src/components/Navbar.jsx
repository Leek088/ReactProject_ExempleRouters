﻿import './Navbar.css';
import { NavLink } from 'react-router-dom';
function Navbar() {
    return (
        <>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">Sobre</NavLink>
            </nav>
        </>
    );
}

export default Navbar;