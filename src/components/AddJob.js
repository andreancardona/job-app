import React, { useState } from 'react'

const AddJob = props => {
  const initialFormState = { id: '', title: '', location: '', posted: '', sponsorship: '', status: '' };
	const [ job, setJob ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setJob({ ...job, [name]: value })
	}

  const handleSubmit = event => {
    event.preventDefault();
   if(!job.title || !job.location || !job.posted || !job.sponsorship || !job.status) return
    props.addJob(job);
    setJob(initialFormState);
  };

	return (
		<form>
      <label>title</label>
      <input
        type="text"
        name="title"
        value={job.title}
        onChange={handleInputChange}
      />
      <label>location</label>
        <input type="text" name="location" value={job.location} onChange={handleInputChange} />
      <label>posted</label>
        <input type="text" name="posted" value={job.posted} onChange={handleInputChange} />
      <label>sponsorship</label>
        <input type="text"name="sponsorship" value={job.sponsorship} onChange={handleInputChange} />
      <label>status</label>
        <input type="text" name="status" value={job.status} onChange={handleInputChange}/>
      <button onClick={handleSubmit}>Add a new Job</button>
      <button onClick={() => props.setEditing(false)} className="edit-button">
        Cancel
      </button>
    </form>
	)
}

export default AddJob