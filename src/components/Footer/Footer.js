import React from 'react';
import SocialProfiles from '../SocialProfiles/SocialProfiles';
import classes from './Footer.module.css';

const Footer = props => {
    return (
        <div className={classes.Footer}>
            <div style={props.darkMode ? {
                borderTop: "1px solid rgba(255, 255, 255, 0.15)"
            } : { borderTop: "1px solid rgba(8, 8, 11, 0.15)" }} />
            <SocialProfiles darkMode={props.darkMode} />
        </div>
    )
};

export default Footer;