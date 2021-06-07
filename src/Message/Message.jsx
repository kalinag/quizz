import React from 'react'
import './message.css'
import { useGlobalContext } from '../context'

const Message = () => {
  const {isMessageOpen, closeMessage, correct,questions} = useGlobalContext()
  return (
    <div className = {`${isMessageOpen ? 'message-container isOpen':'message-container'}`}>
      <div className="message-content">
        <h2>Congrats</h2>
        <p>you got {correct} out of {questions.length} questions correctly</p>
        <button className="btn" onClick={closeMessage}>play again</button>
      </div>
    </div>
  )
}

export default Message;
