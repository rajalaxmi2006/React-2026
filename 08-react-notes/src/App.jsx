import React from 'react'
import Header from './components/Header'
import NoteForm from './components/NoteForm'

const App = () => {
  return (
    <div>
      <h1>
        <Header/>
        <NoteForm/>
      </h1>
    </div>
  )
}

export default App