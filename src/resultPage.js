import Confetti from "react-confetti";

const ResultPage = (props) => {
  const correctAnswers = props.correctAnswers;
  return (
    <div className="firstPage">
      <h1 className="title heading">CONGRATS YOU SCORED: {correctAnswers}/8</h1>
      <p className="share">Share to Test your Friends!</p>
      <div className="confetti-wrap">
        <Confetti />
      </div>
    </div>
  );
};

export default ResultPage;
