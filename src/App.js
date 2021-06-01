import React from 'react'
import { useGlobalContext } from './context'

import SetupForm from './SetupForm'
import Loading from './Loading'
import Modal from './Modal'
function App() {

  const {waiting,loading,questions,index,correct,nextQ,checkAnswer} = useGlobalContext()

  if(waiting){
    return<SetupForm/>
  }
  else if (loading) {
    return <Loading/>
    
  }

  
  const {question, incorrect_answers, correct_answer} = questions[index]

  let answers = [...incorrect_answers]
  const randomIdx =Math.floor( Math.random() * 4)
  if(randomIdx === 3) {
    answers.push(correct_answer)
  } else {
    answers.push(answers[randomIdx])
    answers[randomIdx] = correct_answer
  }
  

 
  return <main>
    <Modal/>
    <section className = 'quiz'>
      <p className = 'correct-answers'>
        correct answers: {correct}/{index}
      </p>

      <div className = 'container'>
        < h2 dangerouslySetInnerHTML = {{__html:question}}/>
        <div className = 'btn-container'>
          {answers.map((answer,index)=>{
            return (
            <button key = {index} className = 'answer-btn' dangerouslySetInnerHTML = {{__html:answer}} onClick={()=>checkAnswer(answer,correct_answer)}/>
            )
          })}
        </div>
      </div>

      <button className = 'btn' onClick ={ nextQ}>next question</button>
    </section>
  </main>
  

  
  
}

export default App
