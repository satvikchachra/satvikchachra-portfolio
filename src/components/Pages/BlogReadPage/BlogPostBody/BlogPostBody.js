import React from 'react';
import classes from './BlogPostBody.module.css';

const BlogPostBody = props => {
    let classArray = classes.Container;
    if(props.darkMode){
        classArray = [classes.Container, classes.Dark].join(' ');
    }
    return (
        <div className={classArray}>
            <p>
                {props.content}
            </p>
        </div>
    );
};

export default BlogPostBody;