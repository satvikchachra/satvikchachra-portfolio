import React from 'react';
import classes from './SmallDescription.module.css';

const SmallDescription = props => {
    let classArray = classes.Container;
    if (props.darkMode) {
        classArray = [classes.Container, classes.Dark].join(' ');
    }
    return (
        <div className={classArray}>
            I am an aspiring Full Stack Web Developer.
            If you are a business, seeking a web presence
            or an employer looking to hire,
            you can get in touch with me here.
        </div>
    )
};

export default SmallDescription;