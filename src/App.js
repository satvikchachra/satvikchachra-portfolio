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
  const [isDarkModeOn, setIsDarkModeOn] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [showHomePage, showProjectPage, showBlogPage]);

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

  const toggleModeHandler = () => {
    setIsDarkModeOn(!isDarkModeOn);
  };

  const homePage = (
    <div>
      <ProfileImage ht="150px" wd="150px" />
      <NameHeader darkMode={isDarkModeOn} />
      <BriefDescription darkMode={isDarkModeOn} />
      <ContactMe />
      <SocialProfiles darkMode={isDarkModeOn} />
      <div className="Navigation-Section">
        <NavigateCard darkMode={isDarkModeOn} clicked={navigateToProjectPageHandler} title="Projects" body="Personal projects on web development." pic={WebsiteIllustration} />
      </div>
      <div className="Navigation-Section">
        <NavigateCard darkMode={isDarkModeOn} clicked={navigateToBlogPageHandler} title="Blogs" body="Personal blogs on web development." pic={BlogIllustration} />
      </div>
    </div>
  );

  const blogPage = (
    <div>
      <div className="Profile-Section">
        <ProfileCard />
      </div>
      <div className="Blog-Section">
        <BlogCard pic={BlogIllustration} title="Blog Title" body="Personal blogs on web development." date="December 12, 2020" time="4 min" />
      </div>
      <div className="Blog-Section">
        <BlogCard pic={BlogIllustration} title="Blog Title" body="Personal blogs on web development." date="December 12, 2020" time="4 min" />
      </div>
    </div>
  );

  const projectPage = (
    <div>
      <div className="Profile-Section">
        <ProfileCard />
      </div>
      <div className="Project-Section">
        <ProjectCard pic={WebsiteIllustration} title="Project Title" body="Personal projects on web development." hostedURL="https://github.com/satvikchachra" githubURL="https://github.com/satvikchachra" />
      </div>
      <div className="Project-Section">
        <ProjectCard pic={WebsiteIllustration} title="Project Title" body="Personal projects on web development." hostedURL="https://github.com/satvikchachra" githubURL="https://github.com/satvikchachra" />
      </div>
    </div>
  );

  let classArray = "App";
  if (isDarkModeOn)
    classArray = "App Dark";

  return (
    <div className={classArray}>
      <Navbar clicked={navigateToHomePageHandler} darkMode={isDarkModeOn} toggler={toggleModeHandler} />
      {showHomePage && homePage}
      {showBlogPage && blogPage}
      {showProjectPage && projectPage}
    </div>
  )
}


export default App;
