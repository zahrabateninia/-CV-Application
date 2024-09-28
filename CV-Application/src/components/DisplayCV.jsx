import {React, useState} from 'react'
import '../styles/resume.css'


const DisplayCV = ({ personalDetails, educationalDetails, professionalDetails }) => {

  const formatDate = (dateStr) =>{
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-US', {year: 'numeric', month:'short'})

  }

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
          <div className="dates">
            <p className='edu-start-date'>{
            educationalDetails.startDate === 'true' ? formatDate(educationalDetails.startDate) : 'Aug 2020'}
            </p>
            <p className='edu-end-date'>{
            educationalDetails.endDate === "true" ? formatDate(educationalDetails.endDate) : 'Nov 2024'}
            </p>
          </div>
        </div>
      </section>

      <section className='cv-professional-info'>
        <h4>Professional Experience</h4>
        <hr />
        <div className='form-pro-info'>
          <p className='job-title'>{professionalDetails.jobTitle || 'Job Title'}</p>
          <p className="company">{professionalDetails.company || 'Company'}</p>
          <div className="dates">
          <p className="job-start-date">{
          professionalDetails.jobStartDate === 'true' ? formatDate(professionalDetails.jobStartDate) : 'Sep 2023'}</p>
          <p className="job-end-date">{professionalDetails.jobEndDate === 'true' ? formatDate(professionalDetails.jobEndDate ) : 'Sep 2024'}
          </p>
          </div>
          <p className="job-description">{
          professionalDetails.jobDescription || 'Job Description'}
          </p>
        </div>
      </section>
    </div>
  )
}

export default DisplayCV
