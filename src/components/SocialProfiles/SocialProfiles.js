import React from 'react';
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import classes from './SocialProfiles.module.css';

const SocialProfiles = () => {
    return (
        <div className={classes.Container}>
            <AiFillGithub size="20px" className={classes.SocialHandles} />
            <AiOutlineTwitter size="20px" className={classes.SocialHandles} />
            <AiFillLinkedin size="20px" className={classes.SocialHandles} />
            <AiFillYoutube size="20px" className={classes.SocialHandles} />
        </div>
    )
};

export default SocialProfiles;