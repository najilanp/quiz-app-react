import { useState } from 'react';
import './App.css';
import QuizView from './components/QuizView';
import ScoreView from './components/ScoreView';

function App() {
  const [isQuizOver,setIsQuizOver]= useState(false)
  const [score,setScore]=useState(0)
  const [ currentQuestion,setCurrentQuestion]=useState(0)


  
  return (
    <div >
      {
        isQuizOver? 
        <ScoreView setIsQuizOver={setIsQuizOver} score={score} setCurrentQuestion={setCurrentQuestion} setScore={setScore} />: 
        <QuizView setIsQuizOver={setIsQuizOver} score={score} setScore={setScore} setCurrentQuestion={setCurrentQuestion} currentQuestion={currentQuestion}/>

      }
    </div>
  );
}

export default App;
