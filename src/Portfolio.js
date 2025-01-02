import React from 'react';
import './index.css'; // Import Tailwind CSS
import Body from "./components/Body/body"
import Home from "./components/home/home"
import ContactForm from './components/contact/contact'
import About from './components/about/about'

function Portfolio() {
  return (
    <div className="portfolio">

      <Body />
      <Home/>
      <ContactForm />
      <About />
    </div>
  );
}

export default Portfolio;
