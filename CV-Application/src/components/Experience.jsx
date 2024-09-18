import React from 'react'
import SectionForm from './SectionForm'
import { FaBriefcase } from 'react-icons/fa';


const initialValues = {
  'job title': '',
  'compony': '',
  'start date': '',
  'end date': '',
  'description':''
};

const inputTypes = {
  'job title': 'text',
  'compony': 'text',
  'start date': 'date',
  'end date': 'date',
  'description':'text'
}

const Experience  = () => {
  return (
<SectionForm 
        sectionTitle={<><FaBriefcase className='form-icon' />Professional Experience</>}
        initialValues={initialValues}
        inputTypes={inputTypes}  
    />
  )
}

export default Experience 
