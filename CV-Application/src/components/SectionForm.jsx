import React from 'react'

const SectionForm = (sectionTitle, initialValues) => {
  const [formData, setFormData] = useState(initialValues) // holds the data of form
  const [isEditing, setIsEditing] = useState(false)

  const handleFormSubmit = (e) =>{
    e.preventDefault()
  } 

  // Handles input changes and updates formData state
  const handleChange = (e)=>{

  }

  const handleEditClick = ()=>{
    setIsEditing(true) // set to edit mode
  }

  return (
    <div className='form-section'>
    { isEditing ? (
    <>
    <h2>{ sectionTitle }</h2>
        <form onSubmit={ handleFormSubmit }>
          {Object.keys(initialValues).map((key) => (
              <div key={key} className="form-group">
                  <label htmlFor="key">
                      {/* Make the first letter of label capital and the rest of its letters will be attached to it */}
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                  </label>
                  <input
                   type={initialValues[key].type}
                   id={key}
                   name={key}
                   value={formData[key]} 
                   onChange={handleChange}
                   />
              </div>
          ))}
          <button type='submit'>Save</button>
        </form>
    </>
        
    ): (
        <>
            {/* Display the data that was entered by the user */}
              <div className='displayFormData'>
                {Object.entries(formData).map(([key,value]) =>(
                    <p key={key}>
                        <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                    </p>
                ))}
              </div>
             
            <button onClick='handleEditClick'>Edit</button>
            
        </>

    )
    
    } 
    </div>
  )
}

export default SectionForm
