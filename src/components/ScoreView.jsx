import React from 'react'
import { Card,Button } from 'react-bootstrap'
import questions from '../question'


function ScoreView({setIsQuizOver,score,setCurrentQuestion,setScore}) {

  const handlereset=()=>{
    setCurrentQuestion(0)
    setScore(0)
    setIsQuizOver(false)

  }
  
  return (
    
       <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center w-100'>
                <Card >
                <div style={{height:'150px',backgroundColor:'#419197'}} >

              <Card.Body>
                <Card.Text>
                   <p className='text-center mt-3 fs-3 text-light'>You scored {score} out of {questions.length}</p> 
                </Card.Text>
               <div className='text-center '>
                <Button onClick={handlereset} style={{backgroundColor:'#12486B'}} className="btn-md" >Reset</Button>
                </div>  
            </Card.Body>
            </div>

            </Card>
       </div>

    
  )
}

export default ScoreView