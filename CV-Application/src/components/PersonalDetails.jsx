import React from 'react';
import SectionForm from './SectionForm';
import { FaUser } from 'react-icons/fa';

const initialValues = {
  'full name': '',
  'email': '',
  'phone number': '',
  'city and province': ''
};

const inputTypes = {
  'full name': 'text',
  'email': 'email',
  'phone number': 'tel',
  'city and province': 'text'
};

const PersonalDetails = ({ onFormSubmit }) => {
  return (
    <SectionForm
      sectionTitle={<><FaUser className='form-icon'/> Personal Details</>}
      initialValues={initialValues}
      inputTypes={inputTypes}
      onFormSubmit={onFormSubmit}  
      startEditing={true} // so the first time rendering the page the form will be displayed for personal details section
    />
  );
};

export default PersonalDetails;
