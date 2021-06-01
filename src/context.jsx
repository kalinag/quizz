import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'

const table = {
  animals:27,
  computers: 18,
  art: 25,
}



const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const [waiting, setWaiting]=useState(true)
  const [loading,setLoading] = useState(false)
  const [questions, setQuestions] = useState([])
  const [index, setIndex] = useState(0)
  const [correct,setCorrect] = useState(0)
  const [error,setError] = useState(false)
  const [isModalOpen,setIsModalOpen] = useState(false)
  const [setup, setSetup] = useState({
    amount:10,
    category:'animals',
    difficulty:'easy'
  })

  const fetchQuestions = async (url) => {
    setLoading(true)
    setWaiting(false)


    try {
      const response =await axios(url)
      const data = response.data.results
      if(data.length >0){
        setQuestions(data)
        setLoading(false)
        setWaiting (false)
        setError(false)
      }else {
        setWaiting(true)
        setError(true)
      }
    }catch(err){
      setWaiting = true
    }
   
  }

  const nextQ = ()=> {
   
    setIndex((oldIndex)=> {
      const index = oldIndex +1
      if (index>questions.length -1) {
        openModal()
        return 0
      }
      return index
    })
  }


  const checkAnswer = (answer, correctAnswer)=> {
    if (answer===correctAnswer) {
      setCorrect(correct+1)
    }
    nextQ()
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal =()=> {
    setWaiting(true)
    setCorrect(0)
    setIsModalOpen(false)
  }

  const handleChange = (e)=> {
    const name = e.target.name
    const value = e.target.value
    setSetup({...setup,[name]:value})
    
    
  }

  const handleSubmit=(e)=> {
    e.preventDefault()
    const {amount, category, difficulty} = setup
    const url = `https://opentdb.com/api.php?amount=${amount}&category=${table[category]}&difficulty=${difficulty}&type=multiple`
    fetchQuestions(url)
  }


  return <AppContext.Provider value={{waiting,loading,questions,index,correct,error,isModalOpen, nextQ, checkAnswer,closeModal,setup,handleChange,handleSubmit}}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
