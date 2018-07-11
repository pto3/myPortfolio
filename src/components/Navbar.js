import React from 'react';

import '../styles/components/navbar.css';


class Navbar extends React.Component {
//   constructor(props) {
//     super(props);
//   }

  render() {
    return (
      <div className="navbarContainer">
        <nav className="navbar" ref="navbar">
          <a href="./images/OBrien_Resume.pdf" target="_blank">Resume</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    );
  }
}

export default Navbar;
