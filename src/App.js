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
import Footer from './components/Footer/Footer';
import WebsiteIllustration from './assets/illustration-black-website.svg';
import BlogIllustration from './assets/illustration-black-blog.svg';
import blogListArray from './components/data/BlogListData/BlogListData';
import projectListArray from './components/data/ProjectListData/ProjectListData';
import './App.css';
import BlogReadPage from './components/BlogReadPage/BlogReadPage';

const App = () => {
  const [showHomePage, setShowHomePage] = useState(true);
  const [showProjectListPage, setShowProjectListPage] = useState(false);
  const [showBlogListPage, setShowBlogListPage] = useState(false);
  const [showBlogReadPage, setShowBlogReadPage] = useState(false);
  const [isDarkModeOn, setIsDarkModeOn] = useState(false);
  const [showBlogID, setShowBlogID] = useState(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [showHomePage, showProjectListPage, showBlogListPage, showBlogReadPage]);

  const navigateToProjectPageHandler = () => {
    setShowProjectListPage(true);
    if (showHomePage)
      setShowHomePage(false);
    if (showBlogListPage)
      setShowBlogListPage(false);
    if (setShowBlogReadPage)
      setShowBlogReadPage(false)
  };

  const navigateToBlogPageHandler = () => {
    setShowBlogListPage(true);
    if (showHomePage)
      setShowHomePage(false);
    if (showProjectListPage)
      setShowProjectListPage(false);
    if (setShowBlogReadPage)
      setShowBlogReadPage(false)
  };

  const navigateToHomePageHandler = () => {
    setShowHomePage(true);
    if (showBlogListPage)
      setShowBlogListPage(false);
    if (showProjectListPage)
      setShowProjectListPage(false);
    if (setShowBlogReadPage)
      setShowBlogReadPage(false)
  };

  const toggleModeHandler = () => {
    setIsDarkModeOn(!isDarkModeOn);
  };

  const blogReadPageHandler = blogID => {

    console.log(blogID);
    // Set blog id to show that particular blog
    setShowBlogID(blogID);

    setShowBlogReadPage(true);
    if (showHomePage)
      setShowHomePage(false);
    if (showBlogListPage)
      setShowBlogListPage(false);
    if (showProjectListPage)
      setShowProjectListPage(false);
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

  const blogListPage = (
    <div>
      <div className="Profile-Section">
        <ProfileCard darkMode={isDarkModeOn} />
      </div>
      {
        blogListArray.map(blogPost => (
          <div key={blogPost.id} className="Blog-Section">
            <BlogCard clicked={blogReadPageHandler.bind(this, blogPost.id)} darkMode={isDarkModeOn} pic={blogPost.pic} title={blogPost.title} desc={blogPost.desc} date={blogPost.date} time={blogPost.time} />
          </div>
        ))
      }
    </div>
  );

  const projectListPage = (
    <div>
      <div className="Profile-Section">
        <ProfileCard darkMode={isDarkModeOn} />
      </div>
      {
        projectListArray.map(project => (
          <div key={project.id} className="Project-Section">
            <ProjectCard darkMode={isDarkModeOn} pic={project.pic} title={project.title} body={project.body} hostedURL={project.hostedURL} githubURL={project.githubURL} />
          </div>
        ))
      }
    </div>
  );

  const blogReadPage = (
    <BlogReadPage id={showBlogID} darkMode={isDarkModeOn} />
  );

  let classArray = "App";
  if (isDarkModeOn)
    classArray = "App Dark";

  return (
    <div className={classArray}>
      <Navbar clicked={navigateToHomePageHandler} darkMode={isDarkModeOn} toggler={toggleModeHandler} />
      {showHomePage && homePage}
      {showBlogListPage && blogListPage}
      {showProjectListPage && projectListPage}
      {showBlogReadPage && blogReadPage}
      <Footer darkMode={isDarkModeOn} />
    </div>
  );
}


export default App;
