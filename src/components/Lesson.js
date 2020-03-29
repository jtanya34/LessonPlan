import React from "react";
import { connect } from "react-redux";
import { Lessons } from "../styled_components";
import SideBar from "./SideBar";

class Lesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lessonDetails: "",
      instrumentTitle: "",
      objectiveDetails: "",
      lessonViewed: "",
    };
  }

  handleClick = (e) => {
    console.log(e.target.innerText);
    let objectiveDetails = this.props.lessonDetails[e.target.innerText - 1]
      .objectiveDetails;
    let color = "#85C61B";
    for (let i = 0; i < objectiveDetails.length; i++) {
      if (objectiveDetails[i].activities[0] !== "Done") {
        color = "#fff";
        i = objectiveDetails.length;
      }
    }
    if (color === "#85C61B") {
      if (
        this.props.lessonDetails[e.target.innerText - 1].lessonVideosDetails
          .length
      ) {
        this.props.lessonDetails[
          e.target.innerText - 1
        ].lessonVideosDetails[0] = color;
      } else {
        this.props.lessonDetails[
          e.target.innerText - 1
        ].lessonVideosDetails.push(color);
      }
    }

    this.setState({
      objectiveDetails: this.props.lessonDetails[e.target.innerText - 1]
        .objectiveDetails,
      lessonViewed: { [e.target.innerText - 1]: true, color: color },
    });
  };

  render() {
    const { lessonDetails } = this.props;
    const { lessonViewed } = this.state;
    return (
      <div>
        <div style={{ display: "flex" }} className="header">
          <span className="App-header">Lessons</span>
          {lessonDetails &&
            lessonDetails.map((each, index) => (
              <Lessons
                className="lessons"
                inputColor={
                  lessonViewed[index]
                    ? lessonViewed["color"]
                    : each.lessonVideosDetails[0]
                }
                key={index}
                onClick={(event) => this.handleClick(event)}
              >
                {index + 1}
              </Lessons>
            ))}
          {!lessonDetails && (
            <div className="loading">
              <div className="obj"></div>
              <div className="obj"></div>
              <div className="obj"></div>
              <div className="obj"></div>
              <div className="obj"></div>
              <div className="obj"></div>
              <div className="obj"></div>
              <div className="obj"></div>
            </div>
          )}
          <span className="exitTab">Exit Session</span>
        </div>
        <SideBar objectiveDetails={this.state.objectiveDetails} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.data);
  return {
    lessonDetails: state.lessonDetails,
    instrumentTitle: state.instrumentTitle,
  };
}

export default connect(mapStateToProps, null)(Lesson);
