import React from 'react';
import classes from './BlogCard.module.css';

const BlogCard = props => {
    return (
        <div className={classes.Card}>
            <div className={classes.ImgContainer}>
                <img alt="blog" src={props.pic} width="100%" />
            </div>
            <div className={classes.CardDescription}>
                <div className={classes.CardTitle}>
                    {props.title}
                </div>
                <p className={classes.CardBody}>
                    {props.body}
                </p>

                <div className={classes.CardDateTime}>
                    <div>
                        {props.date}
                    </div>
                    <div>
                        {props.time} read
                </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;