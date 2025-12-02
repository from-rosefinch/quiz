const Results = ({onReStart,score}) => {
  return (
    <div id="result">
      <div className="quiz-end">
        <p>점수</p>
        <h2>{score}점</h2>
        </div>
      <button onClick={onReStart}>처음으로</button>
    </div>
  )
}

export default Results