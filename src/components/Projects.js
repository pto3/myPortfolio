import React from 'react';

import '../styles/components/projects.css';

class Projects extends React.Component {
  render() {
    return (
      <div className="projectContainer">
        {this.props.projects.map((project, index) => {
          return (
            <ProjectCard projectTitle={project.title}
              projectDescription={project.description}
              projectSkills={project.skills}
              projectLinks={project.links}
              projectScreenshot={project.screenshot}
              key={index} />
          )
        })}
      </div>
    );
  }
}

class ProjectCard extends React.Component {
  componentDidMount() {
    this.refs.screenshot.style.background = "url('./images/" + this.props.projectScreenshot + "')";
    this.refs.screenshot.style.backgroundSize = 'cover';
    this.refs.screenshot.style.backgroundRepeat = 'no-repeat';
    this.refs.screenshot.style.backgroundPosition = 'center';
  }
  render() {
    return (
      <div className="projectCard">
        <div className="projectScreenshot" ref="screenshot"></div>
        <div className="projectContent">
          <h3>{this.props.projectTitle}</h3>
          <p dangerouslySetInnerHTML={{ __html: this.props.projectDescription }}></p>
          <ProjectStack skills={this.props.projectSkills} />
          <ProjectLinks links={this.props.projectLinks} />
        </div>
      </div>
    );
  }
}

class ProjectSkills extends React.Component {
  render() {
    return (
      <div className="projectSkills">
        {this.props.skills.map((skill, index) => {
          return <ProjectSkill skill={skill} key={index} />;
        })}
      </div>
    );
  }
}

class ProjectSkill extends React.Component {
  render() {
    return (
      <div className="skill">
        <span className="skillName">{this.props.skill}</span>
        <img src={"./images/icons/" + this.props.skill + ".png"} height="32" width="32" />
      </div>
    );
  }
}

class ProjectLinks extends React.Component {
  render() {
    return (
      <div className="projectLinks">
        {Object.keys(this.props.links).map((key, index) => {
          return <ProjectLink site={key} link={this.props.links[key]} key={index} />
        })}
      </div>
    );
  }
}

class ProjectLink extends React.Component {
  render() {
    const buttonText = (this.props.site === 'github') ? 'view code' : 'view demo';
    const linkIsEmpty = (this.props.link === '') ? 'true' : 'false';
    if (linkIsEmpty === "false") {
      return (
        <a href={this.props.link} className="projectLink">{buttonText}</a>
      );
    }
    else {
      return null;
    }
  }
}

export default Projects;
