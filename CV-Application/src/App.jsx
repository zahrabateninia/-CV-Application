import React, { useState } from 'react'
import PersonalDetails from './components/PersonalDetails'
import Education from './components/Education'
import Experience from './components/Experience'
import DisplayCV from './components/DisplayCV'
import './styles/style.css'



const App = () => {
  return (
    <div className='app-container'>
      <PersonalDetails />
      <Education />
      <Experience />
      <DisplayCV />
    </div>
  )
}

export default App
