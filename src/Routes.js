import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Portfolio from './Portfolio'
import AboutMe from './pages/aboutme'; // About Me page
import Home from './components/home/home'; // Home component
import ContactForm from './components/contact/contact'; // Contact Form component
import Footer from './components/footer/footer'; // Footer component
import Navbar from './components/navbar/navbar'; // Navbar component
import Body from './components/Body/body'; // Body component

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
        {/* Add other routes as needed */}
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;
