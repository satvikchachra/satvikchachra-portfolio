import React from 'react';
import BriefDescription from '../../BriefDescription/BriefDescription';
import ProfileImage from '../../ProfileImage/ProfileImage';
import classes from './ProfileCard.module.css';

const ProfileCard = props => {

    return (
        <div className={classes.Card}>
            <div className={classes.ProfileImage}>
                <ProfileImage ht="80px" wd="80px" />
            </div>
            <div className={classes.BriefDescription}>
                <BriefDescription darkMode={props.darkMode} />
            </div>
        </div>
    )
};

export default ProfileCard;