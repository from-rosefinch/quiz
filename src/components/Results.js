const Results = ({onReStart}) => {
  return (
    <div id="result">
      <p>퀴즈 종료</p>
      <button onClick={onReStart}>다시시작</button>
    </div>
  )
}

export default Results