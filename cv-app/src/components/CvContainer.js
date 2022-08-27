import { Component } from "react";
import "./cvContainer.css";
import WorkExperienceCv from "./WorkExperienceCv";

class CvContainer extends Component {
  constructor(props) {
    super();
    this.key = 0;
  }

  render() {
    return (
      <div className="cv-container">
        <div className="img-and-name">
          <img src={this.props.avatarUrl} alt="" />
          <h1>{this.props.name}</h1>
        </div>
        <div className="contact-info">
          <h2>{this.props.phonenumber}</h2>
          <h2>{this.props.email}</h2>
        </div>
        <p>{this.props.generalInfo}</p>
        <div className="exp-wrapper">
          {this.props.experience.map((exp) => {
            return (
              <div
                key={exp.key}
                onClick={() => this.props.removeExperience(exp.key)}
                className="exp-wrapper"
              >
                <WorkExperienceCv
                  location={exp.location}
                  from={exp.from}
                  to={exp.to}
                  workInfo={exp.workInfo}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CvContainer;
