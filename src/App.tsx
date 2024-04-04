import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import listOfQuiz from './utils';

function App() {

  const [check, setCheck] = useState(false);

  const handleAnswerClicked = (id: number) => {
    const clickedAnswer = listOfQuiz[0].answers.filter((answer) => id === answer.id)[0]
    console.log(clickedAnswer)

  }
  return (
    <div className='tab'>
      <div className='quiz'>
        <div className='questionTab'>
          <p>Question 0/4</p>
          <br />
          <p>{listOfQuiz[0].question}</p>
        </div>
        <div className='answer'>
          {listOfQuiz[0].answers.map((answer) => {
            return (
              <button onClick={() => handleAnswerClicked(answer.id)} className='allAnswers'>{answer.name}</button>
            )
          })}

        </div>
      </div>
    </div>


  )
}

export default App;
