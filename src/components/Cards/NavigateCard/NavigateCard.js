import React from 'react';
import WebsiteIllustration from '../../../assets/illustration-black-website.svg';
// import BlogIllustration from '../../assets/illustration-black-blog.svg';
import classes from './NavigateCard.module.css';


const NavigateCard = () => {
    return (
        <div className={classes.Card}>
            <div className={classes.ImgContainer}>
                <img alt="Navigation Section" src={WebsiteIllustration} width="100%" />
            </div>
            <div className={classes.CardDescription}>
                <div className={classes.CardTitle}>
                    Projects
                </div>
                <p className={classes.CardBody}>
                    Personal projects on web development.
                </p>
            </div>
            {/* <img src={BlogIllustration} height="300px" width="300px" />

            Image<br />
            Header<br />
            Description */}
        </div>
    )
};

export default NavigateCard;