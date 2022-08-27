import { Component } from "react";
import "./workExperience.css";

class WorkExperienceInput extends Component {
  constructor(props) {
    super();
    this.state = {
      location: "",
      from: "",
      to: "",
      workInfo: "",
    };
  }

  render() {
    return (
      <div className="experience-container">
        <p>Previous work experience</p>
        <form action="">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            onChange={(e) => this.setState({ location: e.target.value })}
          />
          <label htmlFor="duration">Duration:</label>
          <label htmlFor="from">From:</label>
          <input
            type="date"
            name="from"
            id="from"
            onChange={(e) => this.setState({ from: e.target.value })}
          />
          <label htmlFor="to">To:</label>
          <input
            type="date"
            name="to"
            id="to"
            onChange={(e) => this.setState({ to: e.target.value })}
          />
          <label htmlFor="work-info">Work Info:</label>
          <textarea
            name="work-info"
            id="work-info"
            cols="30"
            rows="5"
            onChange={(e) => this.setState({ workInfo: e.target.value })}
          ></textarea>
          <button
            onClick={(e) => {
              e.preventDefault();
              this.props.handleExperienceChange(this.state);
            }}
          >
            add experience
          </button>
        </form>
      </div>
    );
  }
}

export default WorkExperienceInput;
