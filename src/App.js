import React, { useState, useEffect } from 'react';
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
import WebsiteIllustration from './assets/illustration-black-website.svg';
import BlogIllustration from './assets/illustration-black-blog.svg';
import './App.css';

const App = () => {
  const [showHomePage, setShowHomePage] = useState(true);
  const [showProjectPage, setShowProjectPage] = useState(false);
  const [showBlogPage, setShowBlogPage] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [showHomePage, showProjectPage, showBlogPage])

  const navigateToProjectPageHandler = () => {
    setShowProjectPage(true);
    if (showHomePage)
      setShowHomePage(false);
    if (showBlogPage)
      setShowBlogPage(false);
  };

  const navigateToBlogPageHandler = () => {
    setShowBlogPage(true);
    if (showHomePage)
      setShowHomePage(false);
    if (showProjectPage)
      setShowProjectPage(false);
  };

  const navigateToHomePageHandler = () => {
    setShowHomePage(true);
    if (showBlogPage)
      setShowBlogPage(false);
    if (showProjectPage)
      setShowProjectPage(false);
  };

  const homePage = (
    <div>
      <ProfileImage ht="150px" wd="150px" />
      <NameHeader />
      <BriefDescription />
      <ContactMe />
      <SocialProfiles />
      <div className="Navigation-Section">
        <NavigateCard clicked={navigateToProjectPageHandler} title="Projects" body="Personal projects on web development." pic={WebsiteIllustration} />
      </div>
      <div className="Navigation-Section">
        <NavigateCard clicked={navigateToBlogPageHandler} title="Blogs" body="Personal blogs on web development." pic={BlogIllustration} />
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
      <Navbar clicked={navigateToHomePageHandler} />
      {showHomePage && homePage}
      {showBlogPage && blogPage}
      {showProjectPage && projectPage}
    </div>
  )
}


export default App;
