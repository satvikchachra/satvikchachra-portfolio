import React from 'react';
import classes from './NavigateCard.module.css';


const NavigateCard = props => {
    let cardClassesArray = classes.Card;
    let titleClassArray = classes.CardTitle;
    let bodyClassArray = classes.CardBody;
    if (props.darkMode) {
        cardClassesArray = [classes.Card, classes.DarkCard].join(' ');
        titleClassArray = [classes.CardTitle, classes.DarkTitle].join(' ');
        bodyClassArray = [classes.CardBody, classes.DarkBody].join(' ');
    }
    return (
        <div onClick={() => props.clicked()} className={cardClassesArray}>
            <div className={classes.ImgContainer}>
                <img alt="Navigation Section" src={props.pic} width="100%" />
            </div>
            <div className={classes.CardDescription}>
                <div className={titleClassArray}>
                    <h3>{props.title}</h3>
                </div>
                <p className={bodyClassArray}>
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