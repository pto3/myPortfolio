import React from 'react';

import '../styles/components/contactLinks.css';

class ContactLinks extends React.Component {
  render() {
    return (
      <div className="contactContainer">
        <span><a href="mailto:parkerobrien3@gmail.com">Email</a></span>
        <span><a href="https://www.linkedin.com/in/parker-o-brien-8a4605108/">LinkedIn</a></span>
        <span><a href="https://github.com/pto3">github</a></span>
      </div>
    );
  }
}

export default ContactLinks;
