import React from 'react';
import classes from './DarkButton.module.css';

const DarkButton = props => {
    return (
        <div className={classes.DarkButton}>
            {/* <a href={props.hostedURL} target="_blank" rel="noreferrer">Live Demo</a> */}
            <p>Live Demo</p>
        </div>
    )
};

export default DarkButton;