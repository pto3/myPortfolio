import React from 'react';

import '../styles/components/footer.css';
 
class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <span>Made by Parker <span className="yellow">O'Brien</span> <img className="parkerPic" src="./images/parker.png" alt="Cartoon Parker Pic" /> with <img src="./images/icons/react.png" alt="React Icon" /> & <i className="fas fa-heart"></i><br /> {new Date().getFullYear()}</span>
      </div>
    );
  }
}

export default Footer;
