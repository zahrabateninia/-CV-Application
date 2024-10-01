import React, { useState } from 'react'
import SaveCVAsPdf from './components/SaveCVAsPdf'
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
  
  const handlePersonalDetailsChange = (formValues) => {
    setPersonalDetails({
      fullName: formValues['full name'],
      email: formValues['email'],
      phoneNumber: formValues['phone number'],
      city: formValues['city and province']
    })
  }

  const handleEducationalDetailsChange = (formValues) => {
    setEducationalDetails({
      degree: formValues['degree'],
      school: formValues['school'],
      startDate: formValues['start date'],
      endDate: formValues['end date'],
    })
  }


  const handleProfessionalDetailsChange = (formValues) => {
    setProfessionalDetails({
      jobTitle: formValues['job title'],
      company: formValues['company'],
      jobStartDate: formValues['start date'],
      jobEndDate: formValues['end date'],
      jobDescription: formValues['description']
    });
  }
  <SaveCVAsPdf />

  return (
    <div className='app-container'>
      <div className="forms-section">
        <SaveCVAsPdf />
        <div className="forms-container">
          <PersonalDetails onFormSubmit={handlePersonalDetailsChange}/>
          <Education onFormSubmit={handleEducationalDetailsChange}/>
          <Experience onFormSubmit={handleProfessionalDetailsChange}/>
        </div>
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


// Note to myself:

// Lifting the State Up:
// Sharing the form data on the CV report lies in lifting the state. This means storing the form data at a higher level in the component tree 
// (App.jsx component) and passing that data down as props to the components that need it

// The DisplayCV component receives the most up-to-date form data every time a form is submitted