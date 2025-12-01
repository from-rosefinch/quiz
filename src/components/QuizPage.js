//퀴즈화면
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
      <div class="qustion">
        <h3>Q{current + 1}</h3>
        <p class="q-text">{quizes[current].question}</p>
      </div>
      <ul className="choices">
        {quizes[current].choices.map((item, idx) => {
          return (
            <li
              key={idx}
              onClick={() => {
                handleClick(idx);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default QuizPage;
