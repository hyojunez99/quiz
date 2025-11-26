import { useState } from "react"

const QuizPage = ({quizes,onFinish,onScore,score,categoryColor}) => {
    const [current, setCurrent] = useState(0);
    const handleClick = (idx) => {
        //정답체크
        if(idx+1 === quizes[current].correct){
            //점수를 +20
            onScore();
        }
        if(current+1 < quizes.length){
        setCurrent(current+1)
        }else{
            onFinish(true);
        }
        
    }
    const headerStyle = {
      backgroundColor: categoryColor
    };

  return (
    <div id="quiz-page">
        <h3 style={headerStyle}>{quizes[current].question}</h3>
        <div className="quiz">
        <div style={headerStyle} className="quiz-title">
        <p >남은 문제 : {current+1}/{quizes.length}</p>
        <p>점수 : {score}점</p>
        </div>
        <ul className="choices">
            {
                quizes[current].choices.map((item,idx)=>{
                    return(
                        <li key={idx} 
                        onClick={()=>{handleClick(idx)}}>
                            {item}</li>
                    )
                })
            }
        </ul>
        </div>
        </div>
  )
}

export default QuizPage