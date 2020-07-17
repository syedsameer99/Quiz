import React, { Component } from "react";
import Counter from "./components/counter/counter/counter";
import TestDifficuty from "./components/counter/counter/Rating/Rating";
import Question from "./components/Question/Question";
import Options from "../container/components/Options/options";
import "./components/App.css";
// import Progress from "react-progressbar";
import { Progress } from "semantic-ui-react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Zammar from "./components/zammar/zammar";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      progress: 1,
      check: true,
      correctCount: 0,
      wrongAnswer: 0,
      question: [
        {
          category: "Entertainment Video Games",
          type: "multiple",
          difficulty: "hard",
          question:
            "What was the name of the hero in the 80s animated video game Dragons Lair",
          correct_answer: "Dirk the Daring",
          incorrect_answers: ["Arthur", "Sir Toby Belch", "Guy of Gisbourne"],
        },
        {
          category: "Animals",
          type: "multiple",
          difficulty: "easy",
          question: "What is the scientific name for modern day humans",
          correct_answer: "Homo Sapiens",
          incorrect_answers: [
            "Homo Ergaster",
            "Homo Erectus",
            "Homo Neanderthalensis",
          ],
        },
        {
          category: "Entertainment Books",
          type: "multiple",
          difficulty: "hard",
          question: "What is Ron Weasleys middle name",
          correct_answer: "Bilius",
          incorrect_answers: ["Arthur", "John", "Dominic"],
        },
        {
          category: "Entertainment Comics",
          type: "multiple",
          difficulty: "easy",
          question: "Who is the creator of the comic series The Walking Dead",
          correct_answer: "Robert Kirkman",
          incorrect_answers: [
            "Stan Lee",
            "Malcolm Wheeler-Nicholson",
            "Robert Crumb",
          ],
        },
        {
          category: "Entertainment Board Games",
          type: "multiple",
          difficulty: "medium",
          question:
            "At the start of a standard game of the Monopoly if you throw a double six which square would you land on",
          correct_answer: "Electric Company",
          incorrect_answers: ["Water Works", "Chance", "Community Chest"],
        },
        {
          category: "Geography",
          type: "multiple",
          difficulty: "easy",
          question: "What is the capital of Jamaica",
          correct_answer: "Kingston",
          incorrect_answers: ["Rio de Janeiro", "Dar es Salaam", "Kano"],
        },
        {
          category: "History",
          type: "multiple",
          difficulty: "medium",
          question: "When did Jamaica recieve its independence from England ",
          correct_answer: "1962",
          incorrect_answers: ["1492", "1963", "1987"],
        },
        {
          category: "Animals",
          type: "boolean",
          difficulty: "easy",
          question:
            "Kangaroos keep food in their pouches next to their children.",
          correct_answer: "False",
          incorrect_answers: ["True"],
        },
        {
          category: "General Knowledge",
          type: "multiple",
          difficulty: "medium",
          question: "In 2013 how much money was lost by Nigerian scams",
          correct_answer: "12.7 Billion",
          incorrect_answers: ["95 Million", "956 Million", "2.7 Billion"],
        },
        {
          category: "History",
          type: "multiple",
          difficulty: "medium",
          question:
            "How old was Lyndon B. Johnson when he assumed the role of President of the United States",
          correct_answer: "55",
          incorrect_answers: ["50", "60", "54"],
        },
        {
          category: "Entertainment Video Games",
          type: "multiple",
          difficulty: "hard",
          question:
            "In World of Warcraft lore who organized the creation of the Paladins",
          correct_answer: "Alonsus Faol",
          incorrect_answers: [
            "Uther the Lightbringer",
            "Alexandros Mograine",
            "Sargeras The Daemon Lord",
          ],
        },
        {
          category: "Entertainment Video Games",
          type: "boolean",
          difficulty: "medium",
          question: "In the game Subnautica a Cave Crawler will attack you.",
          correct_answer: "True",
          incorrect_answers: ["False"],
        },
        {
          category: "Entertainment Japanese Anime  Manga",
          type: "multiple",
          difficulty: "medium",
          question:
            "What is the name of the device that allows for infinite energy in the anime Dimension W",
          correct_answer: "Coils",
          incorrect_answers: ["Wires", "Collectors", "Tesla"],
        },
        {
          category: "Entertainment Video Games",
          type: "multiple",
          difficulty: "medium",
          question:
            "What is the name of Cream the Rabbits mom in the Sonic the Hedgehog series",
          correct_answer: "Vanilla",
          incorrect_answers: ["Peach", "Strawberry", "Mint"],
        },
        {
          category: "History",
          type: "multiple",
          difficulty: "easy",
          question:
            "These two countries held a commonwealth from the 16th to 18th century.",
          correct_answer: "Poland and Lithuania",
          incorrect_answers: [
            "Hutu and Rwanda",
            "North Korea and South Korea",
            "Bangladesh and Bhutan",
          ],
        },
        {
          category: "Entertainment Television",
          type: "multiple",
          difficulty: "hard",
          question:
            "Which of these voices wasnt a choice for the House AI in The Simpsons Treehouse of Horror short House of Whacks",
          correct_answer: "George Clooney",
          incorrect_answers: [
            "Matthew Perry",
            "Dennis Miller",
            "Pierce Brosnan",
          ],
        },
        {
          category: "Entertainment Music",
          type: "multiple",
          difficulty: "medium",
          question:
            "From which album is the Gorillaz song On Melancholy Hill featured in",
          correct_answer: "Plastic Beach",
          incorrect_answers: ["Demon Days", "Humanz", "The Fall"],
        },
        {
          category: "General Knowledge",
          type: "boolean",
          difficulty: "easy",
          question:
            "Scotland voted to become an independent country during the referendum from September 2014.",
          correct_answer: "False",
          incorrect_answers: ["True"],
        },
        {
          category: "Entertainment Video Games",
          type: "multiple",
          difficulty: "medium",
          question:
            "In Left 4 Dead which campaign has the protagonists going through a subway in order to reach a hospital for evacuation",
          correct_answer: "No Mercy",
          incorrect_answers: [
            "Subway Sprint",
            "Hospital Havoc",
            "Blood Harvest",
          ],
        },
        {
          category: "History",
          type: "multiple",
          difficulty: "hard",
          question:
            "What was the last colony the UK ceded marking the end of the British Empire",
          correct_answer: "Hong Kong",
          incorrect_answers: ["India", "Australia", "Ireland"],
        },
      ],
    };
  }

  shuffle = (array) => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  setCorrectCount = (isCorrectAnswer) => {
    console.log(isCorrectAnswer)
    if (isCorrectAnswer) {
      this.setState({
        correctCount: this.state.correctCount + 1,
      });
    }
    else {
      this.setState({
        wrongAnswer : this.state.wrongAnswer + 1
      })
    }
  };

  handleChange = () => {
    this.setState({
      counter: this.state.counter + 1,
      progress: this.state.progress + 1,
      Correct: this.state.correct_answer,
      Wrong: this.state.incorrect_answers,
      check: !this.state.check,
    });
    this.state.progress = ((this.state.counter * 100) / 20) * 100;
    this.state.currentQuestion = this.state.question[this.state.counter];

    // var currentQuestion=shuffle(this.state.question[this.state.counter])
  };
  render() {
    var currentQuestion = this.state.question[this.state.counter];

    return (
      <div>
        <Progress percent={this.state.progress} />
        <h1>
          Total : {this.state.correctCount} / 20
        </h1>
        <div className="container border mt-2">
          <Counter totalQuestions={20} currentState={this.state.counter + 1} />
          <TestDifficuty />
          <Question question={currentQuestion.question} />
          <Options
            options={this.shuffle(
              currentQuestion.incorrect_answers.concat(
                currentQuestion.correct_answer
              )
            )}
            setCorrectCount={this.setCorrectCount}
            correctAnswer={currentQuestion.correct_answer}
            wrongAnswer={currentQuestion.incorrect_answers}
            onAnswerSelect={this.handleChange}
            check={this.state.check}
          />
        </div>
        {/* <ProgressBar>
          <ProgressBar variant="success" now={this.state.correct} key={1} />
          <ProgressBar variant="warning" now={2} key={2} />
          <ProgressBar variant="danger" now={this.state.wrong} key={3} />
        </ProgressBar> */}
      </div>
    );
  }
}

export default App;
