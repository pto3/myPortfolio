import React from 'react';

import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import ContactLinks from './ContactLinks';
import Footer from './Footer';
import data from '../data/myProjects.js'

import '../styles/components/home.css';



export default class Home extends React.Component {
  render() {
    return (
      <div className="homeContainer">
        <Navbar/>
        <About/>
        <h2 id="projects" className="contentHeader">Projects</h2>
        <Projects projects={data}/>
        <div className="background"></div>
        <h2 id="contact" className="contentHeader">Contact me!</h2>
        <ContactLinks/>
        <Footer/>
      </div>
    );
  }
}
