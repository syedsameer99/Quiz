import React, { useState } from "react";
import "./options.css";
import App from "../../App";

function Options(props) {
  const [selectedWrongAnswer, setSelectedWrongAnswer] = useState(false);
  const [selectedCorrectAnswer, setSelectedCorrectAnswer] = useState(false);
  const [isCorrectAnswer,setIsCorrectAnswer] = useState("")

  const { correctAnswer, wrongAnswer, check } = props;
 


  const wrong = wrongAnswer;
  const correct = correctAnswer;

  // const [correctCount,setCorrectCount] = useState(0);

  var question = wrong.concat(correct);

  const onClick = (item) => {
      if(!selectedWrongAnswer && !selectedCorrectAnswer)
      {
           if(wrongAnswer.includes(item))
           {
             setIsCorrectAnswer(false)
             setSelectedWrongAnswer(item)
           }
           else if(correctAnswer == item)
           {
             setIsCorrectAnswer(true)
            //  props.setCorrectCount()
             setSelectedCorrectAnswer(item)
           }
      }
      else {
        alert("Proceed to next")
      }

      
  };

  const next = () => {

    setSelectedWrongAnswer(false);
    setSelectedCorrectAnswer(false);
    props.setCorrectCount(isCorrectAnswer)
    props.onAnswerSelect();
  };

 

  return (
    <div>
      <div className="row pt-2  w-100">
        {props.options && props.options.map((item) => {
          return (
            <div className={`col-md-6 `}>
              <div
                style={{ cursor: "pointer" }}
                // onChange={props.onAnswerSelect}
                onClick={() => onClick(item)}
                // onClick={props.onAnswerSelect}
                className={`box m-1 d-flex  justify-content-center align-items-center ${
                  item == selectedWrongAnswer ? "bg-danger" : null
                } ${item == selectedCorrectAnswer ? "bg-success" : null}  `}
              >
                {item}
              </div>
            </div>
          );
        })}
        <div>
          <div className="w-100">
            {selectedWrongAnswer ? (
              <div className="d-flex justify-content-between w-100">
                <b>
                  Sorry you selected wrong answer, correct answer is{" "}
                  {correctAnswer}
                </b>
                <button onClick={() => next()}>Next</button>
              </div>
            ) : null}
            {selectedCorrectAnswer ? (
              <div className="d-flex justify-content-between w-100">
                <b>You Selected Correct Answer</b>
                <button onClick={() => next()}>Next</button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Options;
