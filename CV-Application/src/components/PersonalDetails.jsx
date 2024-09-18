import React from 'react'
import SectionForm from './SectionForm'
import {FaUser} from 'react-icons/fa'

const initialValues = {
  'full name': '',
  'email': '',
  'phone number': '',
  'city and province': ''
};

const inputTypes = {
    'full name' : 'text',
    'email' : 'email',
    'phone number' : "tel",
    'city and province' : ''
}


const PersonalDetails = () => {
  return (
    <SectionForm 
        sectionTitle={<><FaUser className='form-icon'/> Personal Details</>}
        initialValues={initialValues}
        inputTypes={inputTypes}  
    />
  )
}

export default PersonalDetails
