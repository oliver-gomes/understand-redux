import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import ButtonGroup from "./ButtonGroup";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return [
      <HelloWorld key={1} tech={this.props.tech} />,
      <ButtonGroup key={2} technologies={["React", "Elm", "React-redux"]} />
    ];
  }
}

function mapStateToProps(state) {
  return {
    tech: state.tech
  };
}

export default connect(
  mapStateToProps,
  null
)(App);
