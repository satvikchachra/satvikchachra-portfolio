import React from 'react';
import ProfileImage from '../ProfileImage/ProfileImage';
import NameHeader from '../NameHeader/NameHeader';
import BriefDescription from '../BriefDescription/BriefDescription';
import ContactMe from '../ContactMe/ContactMe';
import SocialProfiles from '../SocialProfiles/SocialProfiles';
import NavigateCard from '../Cards/NavigateCard/NavigateCard';
import blackBlog from '../../assets/black_blog.svg';
import whiteBlog from '../../assets/white_blog.svg';
import blackProject from '../../assets/black_project.svg';
import whiteProject from '../../assets/white_project.svg';
// import WebsiteIllustration from '../../assets/illustration-black-website.svg';
// import BlogIllustration from '../../assets/illustration-black-blog.svg';

const HomePage = props => {
    return (
        <div>
            <ProfileImage
                ht="150px"
                wd="150px" />

            <NameHeader darkMode={props.darkMode} />

            <BriefDescription darkMode={props.darkMode} />

            <ContactMe />

            <SocialProfiles darkMode={props.darkMode} />

            <div className="Navigation-Section">

                <NavigateCard
                    darkMode={props.darkMode}
                    clicked={props.navigateToProject}
                    title="Projects"
                    body="Personal projects on web development."
                    lightPic={whiteProject}
                    darkPic={blackProject} />

            </div>
            <div className="Navigation-Section">

                <NavigateCard
                    darkMode={props.darkMode}
                    clicked={props.navigateToBlog}
                    title="Blogs"
                    body="Personal blogs on web development."
                    lightPic={whiteBlog}
                    darkPic={blackBlog} />
            </div>
        </div>
    )
};

export default HomePage;