import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Reel from './components/Reel';
import Services from './components/Services';
import Projects from './components/Projects';
import Philosophy from './components/Philosophy';
import FollowUs from './components/FollowUs';
import SocialMediaLinks from './components/SocialMediaLinks';
import ContactDetails from './components/ContactDetails';

const App = () => {
  return (
    <div className='w-full h-screen'>
      <Navbar/>
      <Hero/>
      <Reel/>
      <Services/>
      <Projects/>
      <Philosophy/>
      <FollowUs/>
      <SocialMediaLinks/>
      <ContactDetails/>
    </div>
  )
}

export default App;