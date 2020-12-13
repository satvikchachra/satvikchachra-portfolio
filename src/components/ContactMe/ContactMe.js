import React from 'react';
import classes from './ContactMe.module.css';

const ContactMe = () => {
    return (
        <a href="mailto:satvikchachra19@gmail.com?subject=Mail from Protfolio Site">
            <button className={classes.ContactBtn}>Contact Me</button>
        </a>
    )
};

export default ContactMe;