import React from 'react';
import classes from './LightButton.module.css';

const LightButton = props => {
    return (
        <div className={classes.LightButton}>
            {/* <a href={props.githubURL} target="_blank" rel="noreferrer">View Code</a> */}
            <p>View Code</p>
        </div>
    )
};

export default LightButton;