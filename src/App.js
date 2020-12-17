import React, { useState, useEffect } from 'react';
import Navbar from './containers/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './components/Pages/HomePage';
import BlogListPage from './components/Pages/BlogListPage';
import ProjectListPage from './components/Pages/ProjectListPage';
import BlogReadPage from './components/Pages/BlogReadPage/BlogReadPage';
import blogListArray from './components/data/BlogListData/BlogListData';
import projectListArray from './components/data/ProjectListData/ProjectListData';
import './App.css';

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
    <HomePage
      darkMode={isDarkModeOn}
      navigateToProject={navigateToProjectPageHandler}
      navigateToBlog={navigateToBlogPageHandler} />
  );

  const blogListPage = (
    <BlogListPage
      darkMode={isDarkModeOn}
      list={blogListArray}
      readBlog={blogReadPageHandler} />
  );

  const projectListPage = (
    <ProjectListPage
      darkMode={isDarkModeOn}
      list={projectListArray} />
  )

  const blogReadPage = (
    <BlogReadPage
      id={showBlogID}
      darkMode={isDarkModeOn} />
  );

  let classArray = "App";
  if (isDarkModeOn)
    classArray = "App Dark";

  return (
    <div className={classArray}>
      <Navbar
        clicked={navigateToHomePageHandler}
        darkMode={isDarkModeOn}
        toggler={toggleModeHandler} />

      {showHomePage && homePage}
      {showBlogListPage && blogListPage}
      {showProjectListPage && projectListPage}
      {showBlogReadPage && blogReadPage}

      <Footer
        darkMode={isDarkModeOn} />
    </div>
  );
}


export default App;
