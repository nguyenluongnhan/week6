import '../src/css/QuizApp.css';
import React from 'react';
import {useState} from 'react'

function QuizApp() {
  const questions = [
    {
      questionText: 'What is the capital of France?',
      answerOptiosns: [
        {answerText: 'New York', isCorrect: false},
        {answerText: 'LonDon', isCorrect: false},
        {answerText: 'Paris', isCorrect: true},
        {answerText: 'Ha Noi', isCorrect: false},
      ],
    },
    {
      questionText: 'What is the capital of VietNam?',
      answerOptiosns: [
        {answerText: 'New York', isCorrect: false},
        {answerText: 'LonDon', isCorrect: false},
        {answerText: 'Paris', isCorrect: false},
        {answerText: 'Ha Noi', isCorrect: true},
      ],
    },
    {
      questionText: 'What is the capital of America?',
      answerOptiosns: [
        {answerText: 'New York', isCorrect: false},
        {answerText: 'LonDon', isCorrect: false},
        {answerText: 'Washington, D.C', isCorrect: true},
        {answerText: 'Ha Noi', isCorrect: false},
      ],
    },
    {
      questionText: 'What is the capital of China?',
      answerOptiosns: [
        {answerText: 'New York', isCorrect: false},
        {answerText: 'LonDon', isCorrect: false},
        {answerText: 'Beijing', isCorrect: true},
        {answerText: 'Ha Noi', isCorrect: false},
      ],
    },
  ]

  const [currentQuestion, setCurrentQuestion]= useState(0);

  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if(isCorrect===true)
      setScore(score + 1)


    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length)
      setCurrentQuestion(nextQuestion);
    else
      setShowScore(true)
  }

  return (
    <div className="app">
      {showScore ? (
      <div className='score-section'>You socred {score} out of {questions.length}</div>
      ) : (
            <>
              <div className='question-section'>
                <div className='question-count'>
                  <span>Question {currentQuestion + 1}</span>/{questions.length}
                </div>
                <div className='question-text'>{questions[currentQuestion].questionText}</div>
              </div>
              <div className='answer-section'>
                {questions[currentQuestion].answerOptiosns.map((answerOptiosn)=> <button onClick={()=> {handleAnswerButtonClick(answerOptiosn.isCorrect)}}>{answerOptiosn.answerText}</button>)}
              </div>
            </>
      )}
    </div>
  );
}

export default QuizApp;
