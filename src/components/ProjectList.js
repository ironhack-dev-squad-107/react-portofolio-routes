import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./ProjectList.css";
import allProjects from "../project-list.json";

function projectAddress(project) {
  // return the URL string with the project's ID
  return `/project/${project._id}`;
}

class ProjectList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projectArray: allProjects
    };
  }

  render() {
    const { projectArray } = this.state;

    return (
      <section className="ProjectList">
        <h2>Project List</h2>

        <p>These are the cool projects I have worked on.</p>

        <ul>
          {projectArray.map(oneProject => {
            return (
              <li key={oneProject._id}>
                <h3>
                  <Link to={projectAddress(oneProject)}>{oneProject.name}</Link>
                </h3>
                <p>Technologies: {oneProject.technologies}</p>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default ProjectList;
