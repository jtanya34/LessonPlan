import React from "react";
import { connect } from "react-redux";

import { Tick } from "../images/tick";
import { NotDoing } from "../images/notDoing";
import { NextClass } from "../images/nextClass";
import Video from "./Video";
import { setLessonObjectActivity } from "../redux/action";
import Activity from "./Activity";

class SideBar extends React.Component {
  state = {
    objectiveState: [],
    videoActivity: 'No Activity',
    recitalTitle: "",
  };

  handleClick = (url, classFlow) => {
    this.setState({
      url: url,
      classFlow: classFlow,
    });
  };
  handleState = (state, index) => {
    console.log(this.props.objectiveDetails);
    let { objectiveDetails } = this.props;
    if (objectiveDetails[index].activities.length) {
      objectiveDetails[index].activities[0] = state;
    } else {
      objectiveDetails[index].activities.push(state);
    }

    objectiveDetails = [...objectiveDetails];
    this.props.dispatch(setLessonObjectActivity(objectiveDetails));

    this.setState({
      videoActivity: state,
    });
  };

  render() {
    const { objectiveDetails } = this.props;
    return (
      <div style={{ display: "flex", padding: "15px" }}>
        <div className="sideTab">
          <p>Menu</p>
          <hr />
          {objectiveDetails &&
            objectiveDetails.map((each, index) => (
              <div key={index}>
                <button
                  onClick={() =>
                    this.handleClick(
                      each.objectiveVideosDetails[0].url,
                      each.classFlow
                    )
                  }
                  className="videolink"
                >
                  Video Link{index + 1}
                </button>
                <div className="objective">
                  <div className="title">{each.title}</div>
                  <span style={{ fontWeight: "bold" }}>
                    ({each.durationInMinutes} mins)
                  </span>
                  <div className="activity">
                    <span
                      className="tooltip"
                      onClick={(event) => this.handleState("Done", index)}
                    >
                      <span className="tooltiptext">Done</span>
                      <Tick />
                    </span>
                    <span
                      className="tooltip"
                      onClick={(event) => this.handleState("NotDoing", index)}
                    >
                      <span className="tooltiptext">NotDoing</span>
                      <NotDoing />
                    </span>
                    <span
                      className="tooltip"
                      onClick={(event) => this.handleState("NextClass", index)}
                    >
                      <span className="tooltiptext">NextClass</span>
                      <NextClass />
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <Video url={this.state.url} />
        <Activity
          classFlow={this.state.classFlow}
          videoActivity={this.state.videoActivity}
        />
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    objectiveDetails: props.objectiveDetails,
  };
}

export default connect(mapStateToProps, null)(SideBar);
