import React from 'react';
import WebsiteIllustration from '../../assets/illustration-black-website.svg';
import classes from './BlogCard.module.css';

const BlogCard = () => {
    return (
        <div className={classes.Card}>
            <div className={classes.ImgContainer}>
                <img alt="blog" src={WebsiteIllustration} width="100%" />
            </div>
            <div className={classes.CardDescription}>
                <div className={classes.CardTitle}>
                    Blog Title
                </div>
                <p className={classes.CardBody}>
                    Personal blogs on web development.
                </p>

                <div className={classes.CardDateTime}>
                    <div>
                        December 12, 2020
                </div>
                    <div>
                        4 min read
                </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;