import React, { useState } from 'react'
import PersonalDetails from './components/PersonalDetails'
import Education from './components/Education'
import Experience from './components/Experience'
import DisplayCV from './components/DisplayCV'
import Footer from './components/Footer'
import './styles/App.css'



const App = () => {
  const [personalDetails, setPersonalDetails] = useState({})
  const [educationalDetails, setEducationalDetails] = useState({})
  const [professionalDetails, setProfessionalDetails] = useState({})
  
  const handlePersonalDetailsChange = (formsData) => {

  }

  const handleEducationalDetailsChange = (formsData) => {

  }

  const handleProfessionalDetailsChange = (formsData) => {

  }


  return (
    <div className='app-container'>
      <div className="forms-container">
        <PersonalDetails onFromChange={handlePersonalDetailsChange}/>
        <Education onFromChange={handleEducationalDetailsChange}/>
        <Experience onFromChange={handleProfessionalDetailsChange}/>
      </div>
      <DisplayCV
        personalDetails={personalDetails}
        educationalDetails={educationalDetails}
        professionalDetails={professionalDetails}
      />
      <Footer />
    </div>
  )
}

export default App
