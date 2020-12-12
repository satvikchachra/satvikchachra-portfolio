import React from 'react';
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import classes from './SocialProfiles.module.css';

const SocialProfiles = props => {
    let githubIcon = (<AiFillGithub size="20px" className={classes.SocialHandles} />);
    let twitterIcon = (<AiOutlineTwitter size="20px" className={classes.SocialHandles} />);
    let linkedinIcon = (<AiFillLinkedin size="20px" className={classes.SocialHandles} />);
    let youtubeIcon = (<AiFillYoutube size="20px" className={classes.SocialHandles} />);

    if (props.darkMode) {
        githubIcon = (<AiFillGithub color="#d3cecc" size="20px" className={classes.SocialHandles} />);
        twitterIcon = (<AiOutlineTwitter color="#d3cecc" size="20px" className={classes.SocialHandles} />);
        linkedinIcon = (<AiFillLinkedin color="#d3cecc" size="20px" className={classes.SocialHandles} />);
        youtubeIcon = (<AiFillYoutube color="#d3cecc" size="20px" className={classes.SocialHandles} />);
    }

    return (
        <div className={classes.Container}>
            <a href="https://github.com/satvikchachra" target="_blank" rel="noreferrer">{githubIcon}</a>
            <a href="https://twitter.com/satvikchachra19" target="_blank" rel="noreferrer">{twitterIcon}</a>
            <a href="https://www.linkedin.com/in/satvikchachra/" target="_blank" rel="noreferrer">{linkedinIcon}</a>
            <a href="https://www.youtube.com/channel/UCIbkmb0A8C8ARlX24L5e7xA" target="_blank" rel="noreferrer">{youtubeIcon}</a>
        </div>
    )
};

export default SocialProfiles;