import React from 'react';
import classes from './BlogPostDescription.module.css';

const BlogPostDescription = props => {
    let classArray = classes.Container;
    if(props.darkMode){
        classArray = [classes.Container, classes.Dark].join(' ');
    }
    return (
        <div className={classArray}>
            <p>
                {props.desc}
            </p>
        </div>
    )
};

export default BlogPostDescription;