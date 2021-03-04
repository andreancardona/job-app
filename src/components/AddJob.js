import React, { useState } from 'react'

const AddJob = props => {
  const initialFormState = { id: null, title: '', location: '', posted: '', sponsorship: '', status: '' };
	const [ job, setJob ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setJob({ ...job, [name]: value })
	}

	return (
		<form 
      onSubmit={event => {
				event.preventDefault()
				if (!job.title || !job.location) return

				props.addJob(job)
				setJob(initialFormState)
			}}
      >
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
      <button>Add a new Job</button>
    </form>
	)
}

export default AddJob