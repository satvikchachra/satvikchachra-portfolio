import React from 'react';
import classes from './NavigateCard.module.css';


const NavigateCard = props => {
    return (
        <div onClick={() => props.clicked()} className={classes.Card}>
            <div className={classes.ImgContainer}>
                <img alt="Navigation Section" src={props.pic} width="100%" />
            </div>
            <div className={classes.CardDescription}>
                <div className={classes.CardTitle}>
                    {props.title}
                </div>
                <p className={classes.CardBody}>
                    {props.body}
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