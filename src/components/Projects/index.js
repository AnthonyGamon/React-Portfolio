import React from "react";
import "./style.css";

function Projects(props) {
  return (
    <div className="card">
      <div className="content">
        <ul>
          <li>
            <strong>Title:</strong> {props.title}
          </li>
          <li>
            <strong>Bio:</strong> {props.bio}
          </li>
          <li>
            <strong>Stack:</strong> {props.stack}
          </li>
          <li>
            <strong>Github link:</strong> {props.githublink}
          </li>
          <li>
            <strong>Deployed link:</strong> {props.livelink}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
