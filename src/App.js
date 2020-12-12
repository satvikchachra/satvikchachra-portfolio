import React from 'react';
import Navbar from './components/Navbar/Navbar';
import ProfileImage from './components/ProfileImage/ProfileImage';
import NameHeader from './components/NameHeader/NameHeader';
import BriefDescription from './components/BriefDescription/BriefDescription';
import ContactMe from './components/ContactMe/ContactMe';
import SocialProfiles from './components/SocialProfiles/SocialProfiles';
import NavigateCard from './components/NavigateCard/NavigateCard';
import ProfileCard from './components/ProfileCard/ProfileCard';
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
    </div>
  )

  return (
    <div className="App">
      <Navbar />
      {/* {homePage} */}
      {blogPage}
    </div>
  )
}


export default App;
