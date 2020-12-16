import React from 'react';
// import WebsiteIllustration from '../../../assets/illustration-black-website.svg';
import DarkButton from '../../UI/Buttons/DarkButton/DarkButton';
import LightButton from '../../UI/Buttons/LightButton/LightButton';
import classes from './ProjectCard.module.css';

const ProjectCard = props => {
    let cardDarkClassArray = classes.Card;
    let cardBodyClassArray = classes.CardBody;
    if (props.darkMode) {
        cardBodyClassArray = [classes.CardBody, classes.DarkBody].join(' ');
        cardDarkClassArray = [classes.Card, classes.DarkCard].join(' ');
    }
    return (
        <div className={cardDarkClassArray}>
            <div className={classes.ImgContainer}>
                <img alt="project" src={props.pic} width="100%" />
            </div>
            <div className={classes.CardDescription}>
                <div className={classes.CardTitle}>
                    <h3 style={props.darkMode ? { color: "#d3cecc" } : null}>{props.title}</h3>
                </div>
                <p className={cardBodyClassArray}>
                    {props.body}
                </p>

                <div className={classes.CardButtons}>
                    <a href={props.hostedURL} target="_blank" rel="noreferrer"><DarkButton hostedURL={props.hostedURL} /></a>
                    <a style={{marginLeft: '20px'}} href={props.githubURL} target="_blank" rel="noreferrer"><LightButton githubURL={props.githubURL} /></a>
                </div>
            </div >
        </div >
    )
};

export default ProjectCard;