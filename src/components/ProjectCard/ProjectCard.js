import React from 'react';
import WebsiteIllustration from '../../assets/illustration-black-website.svg';
import DarkButton from '../UI/Buttons/DarkButton/DarkButton';
import LightButton from '../UI/Buttons/LightButton/LightButton';
import classes from './ProjectCard.module.css';

const ProjectCard = () => {
    return (
        <div className={classes.Card}>
            <div className={classes.ImgContainer}>
                <img src={WebsiteIllustration} width="100%" />
            </div>
            <div className={classes.CardDescription}>
                <div className={classes.CardTitle}>
                    Projects
                </div>
                <p className={classes.CardBody}>
                    Personal projects on web development.
                </p>

                <div className={classes.CardButtons}>
                    <DarkButton />
                    <LightButton />
                </div>
            </div>
        </div>
    )
};

export default ProjectCard;