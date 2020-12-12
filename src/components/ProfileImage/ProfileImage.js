import React from 'react';
import myDP from '../../assets/satvikchachra.jpg';
import classes from './ProfileImage.module.css';

const ProfileImage = props => {
    return (
        <div className={classes.DisplayPictureContainer}>
            <img className={classes.DisplayPicture} src={myDP} alt="display-pic" height={props.ht} width={props.wd} />
            {/* <img className={classes.DisplayPicture} src={myDP} alt="display-picture" height="150px" width="150px" /> */}
        </div>
    )
};

export default ProfileImage;