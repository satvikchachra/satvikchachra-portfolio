import React from 'react';
import classes from './LightButton.module.css';

const LightButton = props => {
    return (
        <button className={classes.LightButton}>
            <a href={props.githubURL} target="_blank" rel="noreferrer">View Code</a>
        </button>
    )
};

export default LightButton;