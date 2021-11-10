import React from 'react';

import '../styles/components/about.css';

class About extends React.Component {

  render() {
    return (
      <div className="aboutContainer">
        <div className="aboutName">
          <h2>Parker <span className="yellow">O'Brien</span></h2>
        </div>
        <div className="aboutDescription">
          <p>Web Developer<br/>
            Based <span className="yellow">in</span> Grand Rapids Mi<br/>
            Based <span className="yellow">on</span> coupling design & development <i className="far fa-handshake"></i>
          </p>
        </div>
      </div>
    );
  }
}

export default About;
