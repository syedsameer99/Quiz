import React, { Component } from "react";

export class Question extends Component {
  render() {
    const { question } = this.props;
    return (
      <div>
        <b> {question} ? </b>
      </div>
    );
  }
}

export default Question;
