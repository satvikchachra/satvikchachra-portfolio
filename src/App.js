import React from 'react';
import Navbar from './components/Navbar/Navbar';
import ProfileImage from './components/ProfileImage/ProfileImage';
import NameHeader from './components/NameHeader/NameHeader';
import './App.css';
import BriefDescription from './components/BriefDescription/BriefDescription';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <ProfileImage ht="150px" wd="150px" />
      <NameHeader />
      <BriefDescription />
    </div>
  )
}


export default App;
