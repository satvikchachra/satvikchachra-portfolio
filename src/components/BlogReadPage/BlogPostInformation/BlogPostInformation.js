import React from 'react';
import ProfileImage from '../../ProfileImage/ProfileImage';

const BlogPostInformation = props => {
    return (
        <div>
            <div>
                <ProfileImage />
            </div>
            <div>
                {props.date}
            </div>
            <div>
                {props.time} read
            </div>
        </div>
    )
};

export default BlogPostInformation;