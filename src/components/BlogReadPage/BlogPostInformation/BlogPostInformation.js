import React from 'react';
import ProfileImage from '../../ProfileImage/ProfileImage';

const BlogPostInformation = props => {
    return (
        <div>
            <div>
                <ProfileImage />
            </div>
            <div>
                13 December 2020
            </div>
            <div>
                4 min read
            </div>
        </div>
    )
};

export default BlogPostInformation;