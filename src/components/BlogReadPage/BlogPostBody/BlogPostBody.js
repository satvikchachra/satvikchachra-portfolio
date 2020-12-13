import React from 'react';

const BlogPostBody = props => {
    return (
        <div>
            <p>
                {props.content}
            </p>
        </div>
    );
};

export default BlogPostBody;