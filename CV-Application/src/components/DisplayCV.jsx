import {React, useState} from 'react'
import '../styles/resume.css'

// const [] = useState()
const DisplayCV = ({ personalDetails, educationalDetails, professionalDetails }) => {
  return (
    <div className='cv-container'>
      <section className='cv-personal-info'>
        <h3 className='full-name'>{personalDetails.fullName || 'Full Name'}</h3>
        <div className='personal-details'>
          <p className="email">{personalDetails.email || 'Email'}</p>
          <p className="phone">{personalDetails.phoneNumber || 'Phone Number'}</p>
          <p className="city">{personalDetails.city || 'City'}</p>
        </div>
      </section>

      <section className='cv-educational-info'>
        <h4>Educational Experience</h4>
        <hr />
        <div className='form-edu-info'>
          <p className='degree'>{educationalDetails.degree || 'Degree'}</p>
          <p className='school'>{educationalDetails.school || 'School'}</p>
          <p className='date'>{educationalDetails.startDate || 'Start Date'}</p>
          <p className='date'>{educationalDetails.endDate || 'End Date'}</p>
        </div>
      </section>

      <section className='cv-professional-info'>
        <h4>Professional Experience</h4>
        <hr />
        <div className='form-pro-info'>
          <p className='job-title'>{professionalDetails.jobTitle || 'Job Title'}</p>
          <p className="company">{professionalDetails.company || 'Company'}</p>
          <p className="job-date">{professionalDetails.jobStartDate || 'Job Start Date'}</p>
          <p className="job-date">{professionalDetails.jobEndDate || 'Job End Date'}</p>
          <p className="job-description">{professionalDetails.jobDescription || 'Job Description'}</p>
        </div>
      </section>
    </div>
  )
}

export default DisplayCV
