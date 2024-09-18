import React, { useState } from 'react'
import PersonalDetails from './components/PersonalDetails'
import Education from './components/Education'
import Experience from './components/Experience'
import DisplayCV from './components/DisplayCV'
import './styles/App.css'



const App = () => {
  return (
    <div className='app-container'>
      <div className="forms-container">
        <PersonalDetails />
        <Education />
        <Experience />
      </div>
      <DisplayCV />
    </div>
  )
}

export default App
