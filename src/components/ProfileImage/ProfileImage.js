import React from 'react';
import myDP from '../../assets/satvikchachra.jpg';
import classes from './ProfileImage.module.css';

const ProfileImage = props => {
    const mg = props.mg;
    const pd = props.pd;
    return (
        <div className={classes.DisplayPictureContainer} style={{ margin: mg, padding: pd }}>
            <img className={classes.DisplayPicture} src={myDP} alt="display-pic" height={props.ht} width={props.wd} />
            {/* <img className={classes.DisplayPicture} src={myDP} alt="display-picture" height="150px" width="150px" /> */}
        </div>
    )
};

export default ProfileImage;