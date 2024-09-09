import React from 'react'
import SectionForm from './SectionForm'


 const initialValues = {
  'full name': { value: '', type: 'text' },
  'email': { value: '', type: 'email' },
  'phone number': { value: '', type: 'tel' },
  'city and province': { value: '', type: 'text' }
};


const PersonalDetails = () => {
  return (
    <SectionForm 
        sectionTitle={"Personal Details"}
        initialValues={initialValues}
        
    />
  )
}

export default PersonalDetails
