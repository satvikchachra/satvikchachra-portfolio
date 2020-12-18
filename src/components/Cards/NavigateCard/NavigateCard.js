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

    // const lightModePic = (<img alt="Navigation Section" src={props.lightPic} height='167px' width="100%" />);
    const darkModePic = (<img alt="Navigation Section" src={props.darkPic} />);

    return (
        <div onClick={() => props.clicked()} className={cardClassesArray}>
            <div className={classes.ImgContainer}>
                {darkModePic}
            </div>
            <div className={classes.CardDescription}>
                <div className={titleClassArray}>
                    <h3>{props.title}</h3>
                </div>
                <p className={bodyClassArray}>
                    {props.body}
                </p>
            </div>
        </div>
    )
};

export default NavigateCard;