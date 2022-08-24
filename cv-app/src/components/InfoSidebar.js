import { Component } from "react";
import WorkExperience from "./WorkExperience";
import "./infoSidebar.css";

class InfoSidebar extends Component {
  constructor(props) {
    super();
    this.state = {
      experience: [],
    };
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="general-info-container">
            <label htmlFor="name">Full Name:</label>
            <input type="text" id="name" />
            <label htmlFor="phonenumber">Phone Number:</label>
            <input type="number" name="phonenumber" id="phonenumber" />
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="info">General Info:</label>
            <textarea name="info" id="info" cols="30" rows="10"></textarea>
          </div>
          <div className="exp-container">
            {this.state.experience.map((exp) => (
              <WorkExperience />
            ))}
          </div>
          <button onClick={() => this.addExperience()}>
            Add Work Experience
          </button>
        </div>
      </div>
    );
  }

  addExperience() {
    this.setState({
      experience: [...this.state.experience, <WorkExperience />],
    });
  }
}

export default InfoSidebar;
