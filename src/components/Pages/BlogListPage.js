import React from 'react';
import BlogCard from '../Cards/BlogCard/BlogCard';
import ProfileCard from '../Cards/ProfileCard/ProfileCard';
import blackProject from '../../assets/black_project.svg';
import whiteProject from '../../assets/white_project.svg';
import SpecialCard from '../Cards/SpecialCard/SpecialCard';

const BlogListPage = props => {
    const doNothing = () => {
        return;
    };

    return (
        <div>
            <div className="Profile-Section">
                <ProfileCard darkMode={props.darkMode} />
            </div>
            <div className="Blog-Section">
                <a style={{width: 'auto'}} className='SpecialLink' href='https://dev.to/satvikchachra/how-to-add-an-awesome-readme-to-your-github-profile-361n'
                    target='_blank'
                    rel='noreferrer'>
                    <SpecialCard
                        darkMode={props.darkMode}
                        clicked={doNothing}
                        title="How to add an awesome README to your GitHub Profile"
                        desc="Please click to view on DEV.TO platform."
                        date='July 11 2020'
                        time='4 min'
                        lightPic={whiteProject}
                        darkPic={blackProject} />
                </a>
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