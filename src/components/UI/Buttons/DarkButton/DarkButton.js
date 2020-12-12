import React from 'react';
import classes from './DarkButton.module.css';

const DarkButton = props => {
    return (
        <button className={classes.DarkButton}>
            <a href={props.hostedURL} target="_blank" rel="noreferrer">Live Demo</a>
        </button>
    )
};

export default DarkButton;