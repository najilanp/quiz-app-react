import React, { useState } from 'react'
import { Card,Button } from 'react-bootstrap'
import questions from '../question.js'

function QuizView({setIsQuizOver,score,setScore,setCurrentQuestion,currentQuestion}) {


const handleClick=( isCorrect)=>{
  if(isCorrect){
    setScore(score+1)
  }
  const next=currentQuestion+1
  if(next<questions.length)
  {
  setCurrentQuestion(next)
  }
else{
  setIsQuizOver(true)
}

}


  return (
    <div style={{height:'100vh'}} className='d-flex flex-column  justify-content-center align-items-center w-100'>
        <h1 className='mb-4'>QUIZ APP</h1>
            <Card>
<div style={{backgroundColor:'#419197',width:"550px"}} >
          <Card.Body className='text-center text-light mt-2'>
            <Card.Title>Question {currentQuestion + 1}/{questions.length}</Card.Title>
            <Card.Text>
                <div className='question'>
    
                  <h5>{questions[currentQuestion].question}</h5> 
        
              </div>
            </Card.Text>
           <div className='d-flex flex-column p-3'>
            {questions[currentQuestion].answers.map(item=>(
                <Button onClick={()=>handleClick(item.isCorrect)} key={item.text} style={{backgroundColor:'#12486B'}} className=''>{item.text}</Button>
            ))}
                
           </div>
    
          </Card.Body>
</div>
    </Card>

    </div>
  )
}

export default QuizView