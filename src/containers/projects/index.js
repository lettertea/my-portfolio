import React from "react";
import projects from "./projects";
import "./styles.css";

const Row = ({ title, type, description, source, score }) => (
  <tr id="data-row">
    <td>{title}</td>
    <td>{type}</td>
    <td>{description}</td>
    <td>
      <a href={source} target="_blank" rel="noopener noreferrer">
        {source}
      </a>
    </td>
    <td>{score}</td>
  </tr>
);

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: projects
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
    let arrayCopy = [...this.state.data];
    if (this.state.recentlySorted === key) {
      console.log("hi");
      arrayCopy.reverse();
    } else {
      arrayCopy.sort(this.compareBy(key));
    }
    this.setState({ data: arrayCopy, recentlySorted: key });
  }

  render() {
    const rows = this.state.data.map(rowData => <Row {...rowData} />);

    return (
      <div>
        <h2>Introduction</h2>
        <div id="intro">
          I'm a CS student named Thomas that tries to do web development. I've
          been doing my projects purely on the front-end recently, so I'm
          thinking about branching out to the back-end.
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
            {rows}
          </table>
        </div>
      </div>
    );
  }
}

export default Projects;
