import { useState } from "react";

const QuizPage = ({ quizes, onFinish, onScore, score }) => {
  const [current, setCurrent] = useState(0);
  const handleClick = (idx) => {
    //정답 체크
    if (idx + 1 === quizes[current].correct) {
      //점수를 +20
      onScore();
    }
    if (current + 1 < quizes.length) {
      setCurrent(current + 1);
    } else {
      onFinish(true);
    }
  };
  return (
    <div id="quiz-page">
      <h3>
        퀴즈 ({current + 1}/{quizes.length})
      </h3>
      <p>{quizes[current].question}</p>
      <ul className="choices">
        {quizes[current].choices.map((item, idx) => {
          return (
            <li key={idx} onClick={handleClick}>
              {idx + 1}.{item}
            </li>
          );
        })}
      </ul>
      <p>Child Score : {score}</p>
    </div>
  );
};

export default QuizPage;
