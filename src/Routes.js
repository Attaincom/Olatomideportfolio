import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Portfolio from './Portfolio'; // Portfolio page/component
import AboutMe from './pages/aboutme'; // About Me page
import Home from './components/home/home'; // Home component
import ContactForm from './components/contact/contact'; // Contact Form component
import Footer from './components/footer/footer'; // Footer component
import Navbar from './components/navbar/navbar'; // Navbar component
import Body from './components/Body/body'; // Body component
import MyProjects from './pages/myprojects'; // My Projects page
import ReactProjects from './pages/reactprojects'; // React Projects page
import WordPress from './pages/wordpress'
import StudyWithFM from './pages/graphics'

const AppRoutes = () => {
  return (
    <>
      {/* Include Navbar and Footer on all pages */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/body" element={<Body />} />
        <Route path="/home" element={<Home />} />
        <Route path="/myprojects" element={<MyProjects />} />
        <Route path="/reactprojects" element={<ReactProjects />} />
        <Route path="/wordpress" element={<WordPress />} />
        <Route path="/graphics" element={<StudyWithFM />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;
