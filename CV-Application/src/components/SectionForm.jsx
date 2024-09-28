import { React, useState } from 'react';
import '../styles/forms.css';

const SectionForm = ({ sectionTitle, initialValues, inputTypes, onFormSubmit, startEditing}) => {
  const [formData, setFormData] = useState(initialValues);
  const [isEditing, setIsEditing] = useState(startEditing);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    
    // Call the onFormSubmit prop to pass the form data back to the parent
    onFormSubmit(formData);
  };

  // Handles input changes and updates formData state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditClick = () => {
    setIsEditing(true); // set to edit mode
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    setFormData(initialValues);
    setIsEditing(false);

  }

  return (
    <div className='form-section'>
      {isEditing ? (
        <>
          <h2>{sectionTitle}</h2>
          <form onSubmit={handleFormSubmit}>
            {Object.keys(initialValues).map((key) => (
              <div key={key} className="form-group">
                <label htmlFor={key}>
                  {/* Make the first letter of label capital and the rest of its letters will be attached to it */}
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </label>
                <input
                  type={inputTypes[key]}
                  id={key}
                  name={key}
                  value={formData[key]} 
                  onChange={handleChange}
                  required
                />
              </div>
            ))}
            <div className="form-buttons">
                <button className="cancel-btn" onClick={handleCancelClick}>Cancel</button>
                <button className='save-btn' type='submit'>Save</button>
            </div>
          </form>
        </>
      ) : (
        <>
          {/* Display the data that was entered by the user */}
          <div className='displayFormData'>
            {Object.entries(formData).map(([key, value]) => (
              <p key={key}>
                <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
              </p>
            ))}
          </div>
          <button className='edit-btn' onClick={handleEditClick}>Edit</button>
        </>
      )}
    </div>
  );
}

export default SectionForm;
