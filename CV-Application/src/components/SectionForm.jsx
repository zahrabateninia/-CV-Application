import React from 'react'

const SectionForm = (sectionTitle, initialValues) => {
  const [formData, setFormData] = useState(initialValues)

  const handleFormSubmit = (e) =>{
    e.preventDefault()
  } 

  const handleChange = ()=>{

  }

  return (
    <div className='form-section'>
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
    </div>
  )
}

export default SectionForm
