import { Component } from "react";
import WorkExperienceInput from "./WorkExperienceInput";
import "./infoSidebar.css";

class InfoSidebar extends Component {
  constructor(props) {
    super();
    this.state = {
      experience: [],
    };
    this.key = 1;
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="general-info-container">
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              onChange={this.props.handleNameChange}
            />
            <label htmlFor="avatar">Profile Picture url:</label>
            <input type="url" onChange={this.props.handleAvatarChange} />
            <label htmlFor="phonenumber">Phone Number:</label>
            <input
              type="number"
              name="phonenumber"
              id="phonenumber"
              onChange={this.props.handlePhonenumberChange}
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={this.props.handleEmailChange}
            />
            <label htmlFor="info">General Info:</label>
            <textarea
              name="info"
              id="info"
              cols="30"
              rows="10"
              onChange={this.props.handleGeneralInfoChange}
            ></textarea>
          </div>
          <WorkExperienceInput
            handleExperienceChange={this.props.handleExperienceChange}
          />
        </div>
      </div>
    );
  }

  addExperience() {
    this.setState({
      experience: [...this.state.experience, <WorkExperienceInput />],
    });
  }
}

export default InfoSidebar;
