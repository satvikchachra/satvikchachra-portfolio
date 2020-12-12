import React from 'react';
import Navbar from './components/Navbar/Navbar';
import ProfileImage from './components/ProfileImage/ProfileImage';
import NameHeader from './components/NameHeader/NameHeader';
import BriefDescription from './components/BriefDescription/BriefDescription';
import ContactMe from './components/ContactMe/ContactMe';
import SocialProfiles from './components/SocialProfiles/SocialProfiles';
import NavigateCard from './components/NavigateCard/NavigateCard';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
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
  )
}


export default App;
