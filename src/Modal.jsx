import React from 'react'
import { useGlobalContext } from './context'

const Modal = () => {
  const {isModalOpen, closeModal, correct,questions} = useGlobalContext()
  return (
    <div className = {`${isModalOpen ? 'modal-container isOpen':'modal-container'}`}>
      <div className="modal-content">
        <h2>Congrats</h2>
        <p>you got {correct} out of {questions.length} questions correctly</p>
        <button className="btn" onClick={closeModal}>play again</button>
      </div>
    </div>
  )
}

export default Modal
