import React from "react";
import projects from "./projects";
import "./styles.css"

const Row = ({title, type, description, sourceUrl, score}) => (
  <div className="row">
    <div>{title}</div>
    <div>{type}</div>
    <div>{description}</div>
    <div><a href={sourceUrl} target="_blank" rel="noopener noreferrer">{sourceUrl}</a></div>    
    <div>{score}</div>    
  </div>
);

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: projects,
    };
    
    this.compareBy.bind(this);
    this.sortBy.bind(this);
  }
  
  compareBy(key) {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }

  reverse(key) {
    return function (a, b) {
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
    this.setState({data: arrayCopy, recentlySorted: key});
  }
    
  render() {
    const rows = this.state.data.map( (rowData) => <Row {...rowData} />);

    return (
      <div className="table">
        <div className="header">
          <div onClick={() => this.sortBy('title')} >Title</div>
          <div onClick={() => this.sortBy('type')}>Type</div>
          <div onClick={() => this.sortBy('description')}>Description</div>
          <div onClick={() => this.sortBy('liveDemo')}>Live Demo</div>
          <div onClick={() => this.sortBy('score')}>Pride Score</div>
        </div>
        <div className="body">
          {rows}
        </div>
      </div>
    );
    
  }
}

export default Projects;
