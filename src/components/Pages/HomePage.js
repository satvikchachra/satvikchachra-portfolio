import React from 'react';
import ProfileImage from '../ProfileImage/ProfileImage';
import NameHeader from '../NameHeader/NameHeader';
import BriefDescription from '../BriefDescription/BriefDescription';
import ContactMe from '../ContactMe/ContactMe';
import SocialProfiles from '../SocialProfiles/SocialProfiles';
import NavigateCard from '../Cards/NavigateCard/NavigateCard';
import WebsiteIllustration from '../../assets/illustration-black-website.svg';
import BlogIllustration from '../../assets/illustration-black-blog.svg';

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
                    pic={WebsiteIllustration} />

            </div>
            <div className="Navigation-Section">

                <NavigateCard
                    darkMode={props.darkMode}
                    clicked={props.navigateToBlog}
                    title="Blogs"
                    body="Personal blogs on web development."
                    pic={BlogIllustration} />

            </div>
        </div>
    )
};

export default HomePage;