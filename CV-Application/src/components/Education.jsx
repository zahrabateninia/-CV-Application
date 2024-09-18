import React from 'react'
import SectionForm from './SectionForm'


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


const Education = () => {
  return (
    <SectionForm 
        sectionTitle={"Educational Experience"}
        initialValues={initialValues}
        inputTypes={inputTypes}  
    />
  )
}

export default Education