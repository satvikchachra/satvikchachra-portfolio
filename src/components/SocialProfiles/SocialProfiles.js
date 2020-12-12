import React from 'react';
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import classes from './SocialProfiles.module.css';

const SocialProfiles = () => {
    return (
        <div className={classes.Container}>
            <a href="https://github.com/satvikchachra" target="_blank" rel="noreferrer"><AiFillGithub size="20px" className={classes.SocialHandles} /></a>
            <a href="https://twitter.com/satvikchachra19" target="_blank" rel="noreferrer"><AiOutlineTwitter size="20px" className={classes.SocialHandles} /></a>
            <a href="https://www.linkedin.com/in/satvikchachra/" target="_blank" rel="noreferrer"><AiFillLinkedin size="20px" className={classes.SocialHandles} /></a>
            <a href="https://www.youtube.com/channel/UCIbkmb0A8C8ARlX24L5e7xA" target="_blank" rel="noreferrer"><AiFillYoutube size="20px" className={classes.SocialHandles} /></a>
        </div>
    )
};

export default SocialProfiles;