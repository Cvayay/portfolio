import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import CustomCursor from './components/cursur/CustomCursor';

const App = () => {
  return (
    <div className='portfolio-wrappper'>
      <CustomCursor />
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Qualification />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </div>
  );
};

export default App;