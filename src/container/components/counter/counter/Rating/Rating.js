import React, { Component } from "react";
import { Rating } from "@material-ui/lab";
export class TestDifficuty extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rate: 1,
    };
  }

  render() {
    const changeRate = (event) => {
      this.setState({
          rate : event.target.value
      })  

    };
    return (
      <div>
        <Rating onChange={changeRate} value={this.state.rate} />
      </div>
    );
  }
}

export default TestDifficuty;
