import { Component } from "react";
import "./workExperience.css";

class WorkExperience extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="experience-container">
        <p>Previous work experience</p>
        <label htmlFor="location"></label>
        <input type="text" id="location" />
        <label htmlFor="duration">Duration:</label>
        <label htmlFor="from">From:</label>
        <input type="date" name="from" id="from" />
        <label htmlFor="to">To:</label>
        <input type="date" name="to" id="to" />
        <label htmlFor="work-info">Work Info:</label>
        <textarea name="work-info" id="work-info" cols="30" rows="5"></textarea>
      </div>
    );
  }
}

export default WorkExperience;
