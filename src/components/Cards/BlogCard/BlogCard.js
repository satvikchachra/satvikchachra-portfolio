import React from 'react';
import classes from './BlogCard.module.css';

const BlogCard = props => {
    let cardDarkClassArray = classes.Card;
    let cardBodyClassArray = classes.CardBody;
    let cardDateTimeClassArray = classes.CardDateTime;
    if (props.darkMode) {
        cardBodyClassArray = [classes.CardBody, classes.DarkBody].join(' ');
        cardDarkClassArray = [classes.Card, classes.DarkCard].join(' ');
        cardDateTimeClassArray = [classes.CardDateTime, classes.DarkCardDateTime].join(' ');
    }
    return (
        <div className={cardDarkClassArray}>
            <div className={classes.ImgContainer}>
                <img alt="blog" src={props.pic} width="100%" />
            </div>
            <div className={classes.CardDescription}>
                <div className={classes.CardTitle}>
                    <h3 style={props.darkMode ? { color: "#d3cecc" } : null}>{props.title}</h3>
                </div>
                <p className={cardBodyClassArray}>
                    {props.body}
                </p>

                <div className={cardDateTimeClassArray}>
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