import React from "react";

const Result = ({score, playAgain}) => {
  console.log("score", score)
 return ( <div className="score-board">
    <div className="score">You scored {score} / 5 correct answers!</div>
    <button className="playBtn" onClick={playAgain}>
      Play again!
    </button>
  </div>)
};

export default Result;
