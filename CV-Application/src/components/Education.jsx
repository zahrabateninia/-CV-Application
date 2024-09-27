import React from 'react'
import SectionForm from './SectionForm'
import {FaGraduationCap} from 'react-icons/fa'


const initialValues = {
  'degree': '',
  'school': '',
  'start date': '',
  'end date': ''
};

const inputTypes = {
  'degree': 'text',
  'school': 'text',
  'start date': 'date',
  'end date': 'date'
}


const Education = ( {onFormSubmit} ) => {
  return (
    <SectionForm 
        sectionTitle={<><FaGraduationCap className='form-icon'/>Educational Experience</>}
        initialValues={initialValues}
        inputTypes={inputTypes}  
        onFormSubmit={onFormSubmit} 
    />
  )
}

export default Education