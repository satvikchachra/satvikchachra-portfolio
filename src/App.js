import React from 'react';
import Navbar from './components/Navbar/Navbar';
import ProfileImage from './components/ProfileImage/ProfileImage';
import NameHeader from './components/NameHeader/NameHeader';
import BriefDescription from './components/BriefDescription/BriefDescription';
import ContactMe from './components/ContactMe/ContactMe';
import SocialProfiles from './components/SocialProfiles/SocialProfiles';
import NavigateCard from './components/Cards/NavigateCard/NavigateCard';
import ProfileCard from './components/Cards/ProfileCard/ProfileCard';
import BlogCard from './components/Cards/BlogCard/BlogCard';
import ProjectCard from './components/Cards/ProjectCard/ProjectCard';
import './App.css';

const App = () => {
  const homePage = (
    <div>
      <ProfileImage ht="150px" wd="150px" />
      <NameHeader />
      <BriefDescription />
      <ContactMe />
      <SocialProfiles />
      <div className="Navigation-Section">
        <NavigateCard />
      </div>
      <div className="Navigation-Section">
        <NavigateCard />
      </div>
    </div>
  );

  const blogPage = (
    <div>
      <div className="Profile-Section">
        <ProfileCard />
      </div>
      <div className="Blog-Section">
        <BlogCard />
      </div>
      <div className="Blog-Section">
        <BlogCard />
      </div>
    </div>
  );

  const projectPage = (
    <div>
      <div className="Profile-Section">
        <ProfileCard />
      </div>
      <div className="Project-Section">
        <ProjectCard />
      </div>
      <div className="Project-Section">
        <ProjectCard />
      </div>
    </div>
  );

  return (
    <div className="App">
      <Navbar />
      {homePage}
      {/* {blogPage} */}
      {/* {projectPage} */}
    </div>
  )
}


export default App;
