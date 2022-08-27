import { Component } from "react";
import InfoSidebar from "./InfoSidebar";
import CvContainer from "./CvContainer";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      cv: {
        name: null,
        avatarUrl: null,
        phonenumber: null,
        email: null,
        generalInfo: null,
        experience: [],
      },
    };
    this.key = 0;
  }

  handleNameChange(e) {
    this.setState({ cv: { ...this.state.cv, name: e.target.value } });
  }

  handleAvatarChange(e) {
    this.setState({ cv: { ...this.state.cv, avatarUrl: e.target.value } });
  }

  handlePhonenumberChange(e) {
    this.setState({ cv: { ...this.state.cv, phonenumber: e.target.value } });
  }

  handleEmailChange(e) {
    this.setState({ cv: { ...this.state.cv, email: e.target.value } });
  }

  handleGeneralInfoChange(e) {
    this.setState({ cv: { ...this.state.cv, generalInfo: e.target.value } });
  }

  handleExperienceChange({ location, from, to, workInfo }) {
    this.key++;
    this.setState({
      cv: {
        ...this.state.cv,
        experience: [
          ...this.state.cv.experience,
          {
            location: location,
            from: from,
            to: to,
            workInfo: workInfo,
            key: this.key,
          },
        ],
      },
    });
  }

  removeExperience(key) {
    this.setState({
      cv: {
        ...this.state.cv,
        experience: this.state.cv.experience.filter((exp) => exp.key !== key),
      },
    });
  }

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <InfoSidebar
          handleNameChange={this.handleNameChange.bind(this)}
          handleAvatarChange={this.handleAvatarChange.bind(this)}
          handlePhonenumberChange={this.handlePhonenumberChange.bind(this)}
          handleEmailChange={this.handleEmailChange.bind(this)}
          handleGeneralInfoChange={this.handleGeneralInfoChange.bind(this)}
          handleExperienceChange={this.handleExperienceChange.bind(this)}
        />
        <CvContainer
          name={this.state.cv.name}
          phonenumber={this.state.cv.phonenumber}
          generalInfo={this.state.cv.generalInfo}
          email={this.state.cv.email}
          experience={this.state.cv.experience}
          avatarUrl={this.state.cv.avatarUrl}
          removeExperience={this.removeExperience.bind(this)}
        />
      </div>
    );
  }
}

export default Main;
