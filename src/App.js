import React from "react";
import Lesson from "../src/components/Lesson";
import { connect } from "react-redux";
import { getAllData } from "./redux/action";
import "./App.css";
class App extends React.Component {
  state = {
    lessonDetails: "",
    instrumentTitle: "",
    recitalTitle: "",
  };

  render() {
    return (
      <div className="App">
        <div className="frame">
a          <div className="header">
            <p className="App-header">Lavender's Blue</p>
            <span className="instrument">{this.props.instrumentTitle}</span>
          </div>
          <div className="lesson">
            <Lesson />
            <p className="App-header">{this.state.instrumentTitle}</p>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    lessonDetails: state.lessonDetails,
    instrumentTitle: state.instrumentTitle,
    recitalTitle: state.recitalTitle,
  };
}

function mapDispatchToProps(dispatch) {
  return getAllData(dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
