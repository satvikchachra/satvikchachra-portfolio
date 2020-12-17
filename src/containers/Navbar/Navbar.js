import React, { useState, useEffect } from 'react';
import { FiHexagon, FiSun } from 'react-icons/fi';
import { GoLink } from 'react-icons/go';
import { BsMoon } from 'react-icons/bs';
import classes from './Navbar.module.css';

const Navbar = props => {
    const [showMessage, setShowMessage] = useState({ show: false, msg: null });

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowMessage({ show: false, msg: null });
        }, 900);

        return () => {
            clearTimeout(timeout);
        };
    }, [showMessage]);

    let msgClassArray = classes.Message;
    if (props.darkMode) {
        msgClassArray = [classes.Message, classes.DarkMsg].join(' ');
    }

    const copiedMessage = (
        <div className={msgClassArray}>{showMessage.msg}</div>
    );

    let homeElement = (<FiHexagon size="32px" />);
    let linkElement = (<GoLink size="32px" />);
    let toggleElement = (<BsMoon size="32px" />);

    if (props.darkMode) {
        homeElement = (<FiHexagon color="#d2cecb" size="32px" />);
        linkElement = (<GoLink color="#d2cecb" size="32px" />)
        toggleElement = (<FiSun color="#d2cecb" size="32px" />);
    }

    const copyLinkHandler = () => {

        const linkOfWebsite = "https://github.com/satvikchachra";
        navigator.clipboard.writeText(linkOfWebsite).then(() => {
            setShowMessage({ show: true, msg: 'Copied!' });
            // console.log('Async: Copying to clipboard was successful!');
        }, (err) => {
            setShowMessage({ show: true, msg: 'Error in copying!' });
            // console.error('Async: Could not copy text: ', err);
        });
    };

    const dummy = <div style={{ height: "19.5px" }} />;

    return (
        <div className={classes.NavbarContainer}>
            <ul className={classes.NavLinks}>
                <li onClick={() => props.clicked()} className={classes.Logo}>{homeElement}</li>
                <li onClick={() => props.toggler()} className={classes.ToggleMode}>{toggleElement}</li>
                <li onClick={() => copyLinkHandler()} className={classes.PortfolioLink}>{linkElement}</li>
                <li>{showMessage.show ? copiedMessage : dummy}</li>
            </ul>

        </div>
    );
};

export default Navbar;