import {React, useState} from 'react'
import '../styles/resume.css'

// const [] = useState()
const DisplayCV = ({ personalDetails, educationalDetails, professionalDetails }) => {
  return (
    <div className='cv-container'>

      <section className='cv-personal-info'>
        <h3 className='full-name'>{personalDetails}</h3>
        <div className='personal-details'>
          <p className="email">email</p>
          <p className="phone">my phone</p>
          <p className="city">city</p>
        </div>
      </section>
        
      <section className='cv-educational-info'>
      <h4>Educational Experience</h4>
        <hr />
        <div className='form-edu-info'>
          <p className='degree'>degree</p>
          <p className='school'>school</p>
          <p className='date'>date</p>
        </div>
      </section>
        
      <section className='cv-professional-info'>
      <h4>Professional Experience</h4>
        <hr />
        <div className='form-pro-info'>
          <p className='job-title'>developer</p>
          <p className="company">Google</p>
          <p className="job-date">DATE</p>
          <p className="job-description">hihgkhhh hdgh </p>
        </div>
      </section>
        
    </div>
  )
}

export default DisplayCV
