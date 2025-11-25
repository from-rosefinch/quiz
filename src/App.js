import { useState } from "react";
import "./app.css";
import Categories from "./components/Categories";
import quizData from "./data/quizData.json";
import QuizPage from "./components/QuizPage";
import Results from "./components/Results";

const App = () => {
  const [category, setCategory] = useState("");
  const [filterQuiz, setfilterQuiz] = useState([]);
  const [finish, setFinish] = useState(false);
  const [score, setScore] = useState(0);
  const onSelectCategory = (select) => {
    setCategory(select);
    //quizData에서 선택한 카테고리의 문제만 새로 만듬.
    const quizes = quizData.quizzes.filter((data) => {
      return data.category === select;
    });
    setfilterQuiz(quizes);
  };
  const handleReStart = () => {
    setCategory("");
    setFinish(false);
    setScore(0);
  };
  const handleScore = () => {
    //이전에 가진 값에 +20
    setScore((prev) => {
      return prev + 20;
    });
  };
  return (
    <div id="app">
      <h1>퀴즈</h1>
      {!category && !finish && (
        <Categories
          categories={quizData.categories}
          onSelect={onSelectCategory}
        />
      )}
      {category && !finish && (
        <QuizPage
          quizes={filterQuiz}
          onFinish={setFinish}
          onScore={handleScore}
          score={score}
        />
      )}
      <p>APP SCORE : {score}</p>
      {finish && <Results onReStart={handleReStart} />}
    </div>
  );
};

export default App;
