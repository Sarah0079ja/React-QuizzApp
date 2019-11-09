import React, {Component} from 'react';
import ReactDOM from "react-dom";
import "./assets/style.css";
import quizzData from "./quizzData";
import QuestionSet from "./components/QuestionSet"
import Result from "./components/Result";

class QuizzApp extends Component {

  constructor(props){
    super(props);
this.state = {
  quizzData:[],
  score: 0,
  responses: 0
};
this.getQuestions = this.getQuestions.bind(this)
  }
 

  getQuestions = () => {
    quizzData().then(questions => {
      this.setState({
        quizzData: questions
      });
    });
  };
  computeAnswer = (answer, correctAnswer) => {
    console.log("I am here 000")
      if(answer === correctAnswer) {
          this.setState({
              score: this.state.score + 1
          })
      }
      this.setState({
          responses: this.state.responses < 5 ? this.state.responses + 1 : 5
      });
      console.log("response",this.state.responses)
  };
  playAgain = () => {
      this.getQuestions();
      this.setState({
          score:0,
          responses: 0
      });
  };
  componentDidMount() {
    this.getQuestions();
  };
  render() {
    return(
      <div className="container">
        <div className="title">African Cup of Nations QuizzApp</div>
        {this.state.quizzData.length > 0 &&
         this.state.responses < 5 &&
         this.state.quizzData.map(({question, answers, correct, questionId}) => (
            <QuestionSet 
            question={question}
            options={answers} 
            key={questionId}
            selected={answers => this.computeAnswer(answers, correct)}
           />
        )
        )}
            {  this.state.responses === 5 ?
             (<Result score={this.state.score} playAgain={this.playAgain} />) : null}}
             
      </div>
    )

  }
  
}
ReactDOM.render(<QuizzApp />, document.getElementById("root"));
export default QuizzApp;
