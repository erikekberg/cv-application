import { Component } from "react";

class WorkExperienceCv extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="exp-cv">
        <h3>{this.props.location}</h3>
        <h4>
          from {this.props.from} to {this.props.to}
        </h4>
        <p>{this.props.workInfo}</p>
      </div>
    );
  }
}

export default WorkExperienceCv;
