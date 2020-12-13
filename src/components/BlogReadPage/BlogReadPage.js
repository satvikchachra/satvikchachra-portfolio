import React from 'react';
import BlogPostTitle from './BlogPostTitle/BlogPostTitle';
import BlogPostDescription from './BlogPostDescription/BlogPostDescription';
import BlogPostInformation from './BlogPostInformation/BlogPostInformation';
import BlogPostBody from './BlogPostBody/BlogPostBody';

const BlogReadPage = props => {
    return (
        <div>
            <BlogPostTitle />
            <BlogPostDescription />
            <BlogPostInformation />
            <BlogPostBody />
        </div>
    )
};

export default BlogReadPage;