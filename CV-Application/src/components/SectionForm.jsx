import { React, useState } from 'react';
import '../styles/forms.css';

const SectionForm = ({ sectionTitle, initialValues, inputTypes, onFormSubmit, startEditing }) => {
  const [formData, setFormData] = useState(initialValues);
  const [isEditing, setIsEditing] = useState(startEditing);

  // Helper function to check if the form data is empty
  const isFormDataEmpty = () => {
    return Object.values(formData).every((value) => value === '');
  };

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
    setIsEditing(false);
  };

  // Rendering logic using if-else
  if (isEditing) {
    return (
      <div className="form-section">
        <h2>{sectionTitle}</h2>
        <form onSubmit={handleFormSubmit}>
          {Object.keys(initialValues).map((key) => (
            <div key={key} className="form-group">
              <label htmlFor={key}>
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
            <button className="cancel-btn" onClick={handleCancelClick}>
              Cancel
            </button>
            <button className="save-btn" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }

  if (isFormDataEmpty()) {
    return (
      <div className="form-section">
        <div className="empty-form-box" onClick={handleEditClick}>
          <h2>{sectionTitle}</h2>
          <p>No data entered yet. Click to add details.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="form-section">
      <div className="displayFormData">
        {Object.entries(formData).map(([key, value]) => (
          <p key={key}>
            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
          </p>
        ))}
      </div>
      <button className="edit-btn" onClick={handleEditClick}>
        Edit
      </button>
    </div>
  );
};

export default SectionForm;


// // Conditional rendering of components:

// //  If no data is added yet => show a box with form title, when clicked go on editing mode
// //  If data is added => show a summary of data and edit button 
// //  If editing mode => show the form with save and cancel button
