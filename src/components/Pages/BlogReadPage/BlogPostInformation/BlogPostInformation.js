import React from 'react';
import ProfileImage from '../../../ProfileImage/ProfileImage';
import classes from './BlogPostInformation.module.css';

const BlogPostInformation = props => {
    let classArray = classes.Container;
    if(props.darkMode){
        classArray = [classes.Container, classes.Dark].join(' ');
    }
    return (
        <div className={classArray}>
            <div>
                <ProfileImage ht="40px" width="40px" mg="0 10px 0 0" pd="0px" />
            </div>
            <div className={classes.Date}>
                <p>
                    {props.date}
                </p>
            </div>
            <div className={classes.Time}>
                <p>
                    {props.time} read
                </p>
            </div>
        </div>
    )
};

export default BlogPostInformation;