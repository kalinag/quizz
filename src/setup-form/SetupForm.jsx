import React from 'react'
import { useGlobalContext } from '../context'
import './setupForm.styles.css'

const SetupForm = () => {
  const{setup, handleChange, handleSubmit,error} = useGlobalContext()
  return (
  <main>
    <section className="quiz">
      <form className="setup-form">
        <h2>Setup Quiz</h2>
        <div className="form-control">
          <label htmlFor="amount">number of questions</label>
          <input type="number" 
            name = 'amount'
            id = 'amount' 
            value = {setup.amount} 
            onChange = {handleChange} 
            className='form-input'
            min={1}
            max={50} />
        </div>
        <div className="form-control">
          <label htmlFor="category">category</label>
          <select name="category" id="category"className='form-input'value = {setup.category} onChange = {handleChange}>
            <option value="animals">animals</option>
            <option value="art">art</option>
            <option value="computers">computers</option>

          </select>
        </div>
        <div className="form-control">
          <label htmlFor="difficulty"> set difficulty</label>
          <select name="difficulty" id="difficulty"className='form-input'value = {setup.difficulty} onChange = {handleChange}>
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>

          </select>
        </div>
        {error && <p className = 'error'>There seems to be a problem, please try different settings</p>}
        <button type='submit' onClick = {handleSubmit} className='btn'> start</button>
      </form>
    </section>
  </main>
  )
}

export default SetupForm
