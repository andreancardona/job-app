import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/AddJob.css';

const AddJob = (props) => {
  const initialFormState = { id: '', title: '', location: '', posted: '', sponsorship: '', status: '' };
	const [ job, setJob ] = useState(initialFormState)

	const handleInputChange = (event) => {
		const { name, value } = event.target

		setJob({ ...job, [name]: value })
	}

  let history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!job.title || !job.location || !job.posted || !job.sponsorship || !job.status) return
  
    props.addJob(job);
      setJob(initialFormState);
    
    history.push("/home")
  };

  const handleCancel = (event) => {
    event.preventDefault();

    props.setEditing(false)

    history.push("/home")
  }

	return (
    <div className="add-job-container">
      <div className="add-job-headers">
      <div className="add-job-heading">
        Add a new job
      </div>
      <div className="add-job--sub-heading">
        Fill out the information to post your new job listing.
      </div>
      </div>
      <form className="add-job-form">
        <label className="label">Job title</label>
          <input className="add-job-input" type="text" name="title" value={job.title} onChange={handleInputChange} />
        <label className="label">Location</label>
          <input className="add-job-input" type="text" name="location" value={job.location} onChange={handleInputChange} />
        {/* <label>posted</label>
          <input type="text" name="posted" value={job.posted} onChange={handleInputChange} /> */}
        <label className="label">Sponsorship</label>
          <input className="add-job-input" type="text"name="sponsorship" value={job.sponsorship} onChange={handleInputChange} />
        <label className="label">Status</label>
          <input className="add-job-input" type="text" name="status" value={job.status} onChange={handleInputChange}/>
      </form>
      <div className="add-job-footer">
        <button onClick={handleSubmit}>submit</button>
        <button onClick={handleCancel} className="edit-button">Cancel</button>
      </div>
    </div>
	)
}

export default AddJob