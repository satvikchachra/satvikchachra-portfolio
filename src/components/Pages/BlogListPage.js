import React from 'react';
import BlogCard from '../Cards/BlogCard/BlogCard';
import ProfileCard from '../Cards/ProfileCard/ProfileCard';

const BlogListPage = props => {
    return (
        <div>
            <div className="Profile-Section">
                <ProfileCard darkMode={props.darkMode} />
            </div>
            {
                props.list.map(blogPost => (
                    <div key={blogPost.id} className="Blog-Section">
                        <BlogCard
                            clicked={props.readBlog.bind(this, blogPost.id)}
                            darkMode={props.darkMode}
                            pic={blogPost.pic}
                            title={blogPost.title}
                            desc={blogPost.desc}
                            date={blogPost.date}
                            time={blogPost.time} />
                    </div>
                ))
            }
        </div>
    );
};

export default BlogListPage;