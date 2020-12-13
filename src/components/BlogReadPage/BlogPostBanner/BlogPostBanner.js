import React from 'react';
import classes from './BlogPostBanner.module.css'

const BlogPostBanner = props => {
    return (
        <div className={classes.ImgContainer}>
            <img alt="Blog Banner" src={props.pic} />
        </div>
    );
};

export default BlogPostBanner;