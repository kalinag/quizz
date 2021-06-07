import React from 'react'
import { useGlobalContext } from './context'

import SetupForm from './setup-form/SetupForm'
import Loading from './Loading'
import Message from './Message/Message'
import Quiz from './quiz/quiz'
function App() {

  const {waiting,loading} = useGlobalContext()

  if(waiting){
    return<SetupForm/>
  }
  else if (loading) {
    return <Loading/>
    
  }
  return <main>
    <Message/>
    <Quiz/>
    
  </main>
  

  
  
}

export default App
