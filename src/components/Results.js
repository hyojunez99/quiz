import React from "react";

const Results = ({ onReStart, score, categoryColor }) => {
  const headerStyle = {
    backgroundColor: categoryColor,
  };
  return (
    <div id="result">
      <div className="last-txt">
        <h2>퀴즈 완료</h2>
      </div>
      <div className="mid-txt">
        <p>내 건강 상식 점수는?</p>
        <h3>{score}점!</h3>
      </div>
      <button style={headerStyle} onClick={onReStart}>
        다시 시작
      </button>
    </div>
  );
};

export default Results;
