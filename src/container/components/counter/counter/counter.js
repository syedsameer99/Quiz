import React from "react";
import { Typography } from '@material-ui/core'

export default function Counter(props) {
  const {currentState, totalQuestions} = props;
  return <div>
       <Typography variant = "h4">
           Question {currentState} of {totalQuestions}
       </Typography>
       <Typography className = "text-danger">Entertainment : Board Games</Typography>
  </div>;
}
