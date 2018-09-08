import React from "react";

const ProjectRow = ({ title, type, description, source, score }) => (
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

  export default ProjectRow;