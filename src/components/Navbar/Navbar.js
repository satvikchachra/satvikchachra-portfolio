import React from 'react';
import { FiHexagon, FiSun } from 'react-icons/fi';
import { GoLink } from 'react-icons/go';
import { BsMoon } from 'react-icons/bs';
import classes from './Navbar.module.css';

const Navbar = props => {
    let homeElement = (<FiHexagon size="32px" />);
    let linkElement = (<GoLink size="32px" />);
    let toggleElement = (<BsMoon size="32px" />);

    if (props.darkMode) {
        homeElement = (<FiHexagon color="#d2cecb" size="32px" />);
        linkElement = (<GoLink color="#d2cecb" size="32px" />)
        toggleElement = (<FiSun color="#d2cecb" size="32px" />);
    }

    return (
        <div className={classes.NavbarContainer}>
            <ul className={classes.NavLinks}>
                <li onClick={() => props.clicked()} className={classes.Logo}>{homeElement}</li>
                <li onClick={() => props.toggler()} className={classes.ToggleMode}>{toggleElement}</li>
                <li className={classes.PortfolioLink}>{linkElement}</li>
            </ul>
        </div>
    )
};

export default Navbar;