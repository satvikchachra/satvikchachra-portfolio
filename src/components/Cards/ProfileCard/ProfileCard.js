import React from 'react';
// import BriefDescription from '../../BriefDescription/SmallDescription/SmallDescription';
import SmallDescription from '../../BriefDescription/SmallDescription/SmallDescription';
import ProfileImage from '../../ProfileImage/ProfileImage';
import classes from './ProfileCard.module.css';

const ProfileCard = props => {

    return (
        <div className={classes.Card}>
            <div className={classes.ProfileImage}>
                <ProfileImage ht="80px" wd="80px" />
            </div>
            <div className={classes.BriefDescription}>
                <SmallDescription darkMode={props.darkMode} />
            </div>
        </div>
    )
};

export default ProfileCard;