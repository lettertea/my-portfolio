import React from "react";
import projects from "./projects";
import ProjectRow from "./ProjectRow";
import "./styles.css";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: projects
    };

    this.compareBy.bind(this);
    this.sortBy.bind(this);
  }

  compareBy(key) {
    return function(a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }

  reverse(key) {
    return function(a, b) {
      if (a[key] > b[key]) return -1;
      if (a[key] < b[key]) return 1;
      return 0;
    };
  }

  sortBy(key) {
    let arrayCopy = [...this.state.projects];
    if (this.state.recentlySorted === key) {
      console.log("hi");
      arrayCopy.reverse();
    } else {
      arrayCopy.sort(this.compareBy(key));
    }
    this.setState({ projects: arrayCopy, recentlySorted: key });
  }

  render() {
    const projectRows = this.state.projects.map(project => <ProjectRow {...project} />);

    return (
      <div>
        <h2>Introduction</h2>
        <div id="intro">
          My name Thomas Le, and I am studying computer science at university. I've mostly done front-end development,
          so in the future, I plan to try some more back-end development.
        </div>
        <h2>Projects</h2>
        <div id="table-container">
          <table>
            <tr id="header">
              <th onClick={() => this.sortBy("title")}>Title</th>
              <th onClick={() => this.sortBy("type")}>Type</th>
              <th onClick={() => this.sortBy("description")}>Description</th>
              <th onClick={() => this.sortBy("source")}>Source</th>
              <th onClick={() => this.sortBy("score")}>Pride Score</th>
            </tr>
            {projectRows}
          </table>
        </div>
      </div>
    );
  }
}

export default Projects;
