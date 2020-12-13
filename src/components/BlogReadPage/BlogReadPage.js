import React from 'react';
import BlogPostTitle from './BlogPostTitle/BlogPostTitle';
import BlogPostDescription from './BlogPostDescription/BlogPostDescription';
import BlogPostInformation from './BlogPostInformation/BlogPostInformation';
import BlogPostBody from './BlogPostBody/BlogPostBody';
import blogListArray from '../../components/data/BlogListData/BlogListData';

const BlogReadPage = props => {
    const blogObject = blogListArray.find(blog => blog.id === props.id);

    return (
        <div>
            <BlogPostTitle title={blogObject.title} />
            <BlogPostDescription desc={blogObject.desc} />
            <BlogPostInformation date={blogObject.date} time={blogObject.time} />
            <BlogPostBody content={blogObject.content} />
        </div>
    )
};

export default BlogReadPage;