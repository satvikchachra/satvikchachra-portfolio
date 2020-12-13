import React from 'react';
import BlogPostTitle from './BlogPostTitle/BlogPostTitle';
import BlogPostDescription from './BlogPostDescription/BlogPostDescription';
import BlogPostInformation from './BlogPostInformation/BlogPostInformation';
import BlogPostBody from './BlogPostBody/BlogPostBody';
import blogListArray from '../../components/data/BlogListData/BlogListData';
// import BlogPostBanner from './BlogPostBanner/BlogPostBanner';
import classes from './BlogReadPage.module.css';

const BlogReadPage = props => {
    const blogObject = blogListArray.find(blog => blog.id === props.id);

    let view = (<p>The blog you are looking for does not exist...</p>);

    if (blogObject) {
        view = (
            <div>
                <div className={classes.CenterSection}>
                    <div className={classes.CompleteBlog}>
                        {/* <BlogPostBanner pic={blogObject.pic} /> */}
                        {/* <div className={classes.CenterSection}> */}
                        <BlogPostTitle darkMode={props.darkMode} title={blogObject.title} />
                        {/* </div> */}
                        {/* <div className={classes.CenterSection}> */}
                        <BlogPostDescription darkMode={props.darkMode} desc={blogObject.desc} />
                        {/* </div> */}
                        {/* <div className={classes.CenterSection}> */}
                        <BlogPostInformation darkMode={props.darkMode} date={blogObject.date} time={blogObject.time} />
                        {/* </div> */}
                        {/* <div className={classes.CenterSection}> */}
                        <BlogPostBody darkMode={props.darkMode} content={blogObject.content} />
                        {/* </div> */}
                    </div>
                </div>
            </div>
        )
    }

    return view;
};

export default BlogReadPage;