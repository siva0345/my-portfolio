import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <div className="skills">
      <div className="skills1">
        <h2 className="tech">Technical Skills</h2>
        <br />
        <b style={{fontSize:"20px"}}>● Frontend:</b> HTML5, CSS3, JavaScript, ReactJS
        <br />
        <b style={{fontSize:"20px"}}>● Backend and Databases:</b> NodeJs, MongoDB, MySQL
        <br />
        <b style={{fontSize:"20px"}}>● Others:</b> Java, Angular, Spring and Python
      </div>
      <div className="skills2">
        <h2 className="tech">Soft Skills</h2>
        <br />
        <b style={{fontSize:"20px"}}>● Logical Thinking</b>
        <br />
        <b style={{fontSize:"20px"}}>● Problem Solving</b>
        <br />
        <b style={{fontSize:"20px"}}>● Team Work</b>
        <br />
        <b style={{fontSize:"20px"}}>● Attention to Details</b>
      </div>
    </div>
  );
}

export default Skills;
