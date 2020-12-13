import React from 'react';
import classes from './BlogTitle.module.css';

const BlogTitle = props => {
    let classArray = classes.Title;
    if(props.darkMode){
        classArray = [classes.Title, classes.Dark].join(' ');
    }
    return (
        <div className={classArray}>
            <h1>{props.title}</h1>
        </div>
    );
}

export default BlogTitle;