import Categories from "./components/Categories";
import quizData from "./data/quizData.json";
import "./App.css";
import { useState } from "react";
import QuizPage from "./components/QuizPage";
import Results from "./components/Results";

const categoryColors = {
  "헬린이 탈출 가이드 (운동기초)": "#007FFF", // 파란색
  "오늘도 득근! 근육 빌딩 (근력운동)": "#FF854B", // 주황색
  "아프지 마, 내 몸! 안전 운동 (부상예방)": "#45C191", // 민트색
  "맛있게 건강해지는 법 (영양)": "#7F3FBF", // 보라색
};

const App = () => {
  const [category, setCategory] = useState("");
  const [filterQuiz, setFilterQuiz] = useState([]);
  const [finish, setFinish] = useState(false);
  const [score, setScore] = useState(0);
  const onSelectCategory = (select) => {
    setCategory(select);
    // quizData에서 선택한 카테고리의 문제만 새로 만듬.
    const quizes = quizData.quizzes.filter((data) => {
      return data.category === select;
    });
    setFilterQuiz(quizes);
  };
  const handleReStart = () => {
    setCategory("");
    setFinish(false);
    setScore(0);
  };
  const handleScore = () => {
    // 이전에 가진 값에 +20
    setScore((prev) => {
      return prev + 20;
    });
  };
  const currentCategoryColor = categoryColors[category] || "#007FFF";
  return (
    <div id="app">
      <div className="bg-img"></div>
      {!category && !finish && (
        <div className="main-page">
        <div className="main-txt">
          <h2>내 건강 상식 레벨은?!</h2>
        </div>
        <p>카테고리를 선택하세요 ↓</p>
        </div>
      )}
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
            categoryColor={currentCategoryColor}
        />
      )}
      <p>APP SCORE : {score}</p>
      {finish && 
      <Results 
      onReStart={handleReStart} 
      score={score}
            categoryColor={currentCategoryColor}

      />
      }
    </div>
  );
};

export default App;
