import React from 'react';
import { FiHexagon } from 'react-icons/fi';
import { GoLink } from 'react-icons/go';
import { BsMoon } from 'react-icons/bs';
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={classes.NavbarContainer}>
            <ul className={classes.NavLinks}>
                <li className={classes.Logo}><FiHexagon size="32px" /></li>
                <li className={classes.ToggleMode}><BsMoon size="32px" /></li>
                <li className={classes.PortfolioLink}><GoLink size="32px" /></li>
            </ul>
        </div>
    )
};

export default Navbar;