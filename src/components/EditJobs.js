import React, { useState, useEffect } from 'react'

const EditJob = props => {
  const [ job, setJob ] = useState(props.currentJob)

  useEffect(() => {setJob(props.currentJob)},[ props ])

  const handleInputChange = event => {
    const { name, value } = event.target

    setJob({ ...job, [name]: value })
  }

  const handleSubmit = event => {
    event.preventDefault()

    props.updateJob(job.id, job)
  }
  
  return (
    <form>
			<label>Title</label>
			  <input type="text" name="title" value={job.title} onChange={handleInputChange} />
			<label>Location</label>
			  <input type="text" name="location" value={job.location} onChange={handleInputChange} />
      <label>Posted</label>
			  <input type="text" name="posted" value={job.posted} onChange={handleInputChange} />
      <label>Sponsorship</label>
			  <input type="text" name="sponsorship" value={job.sponsorship} onChange={handleInputChange} />
      <label>Status</label>
			  <input type="text" name="status" value={job.status} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Update Job</button>
      <button onClick={() => props.setEditing(false)} className="edit-button">
        Cancel
      </button>
    </form>
  )
}

export default EditJob