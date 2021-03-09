import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/AddJob.css';

const AddJob = (props) => {
  const initialFormState = { id: '', title: '', location: '', sponsorship: '', status: '' };
	const [ job, setJob ] = useState(initialFormState);


	const handleInputChange = (event) => {
		const { name, value } = event.target

		setJob({ ...job, [name]: value })

    console.log(job, 'some job')
	}

  let history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!job.title || !job.location || !job.sponsorship || !job.status) 
    
    return

      props.addJob(job);
        setJob(initialFormState);
      
      history.push("/home")

      console.log('some job', job)
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
          <div className="sub-label">What is name of the role?</div>
          <input className="add-job-input" type="text" name="title" value={job.title} onChange={handleInputChange} />
        <label className="label">Location</label>
          <div className="sub-label">Where is this job?</div>
          <input className="add-job-input" type="text" name="location" value={job.location} onChange={handleInputChange} />
        <label className="label">Sponsorship</label>
          <div className="sub-label">Do you want to promote this job?</div>    
            <select className="add-job-input" onChange={handleInputChange} name="sponsorship" value={job.sponsorship}>
              <option value="sponsorship">Sponsorship</option>
              <option value="free">Free</option>
              <option value="Unknow">Unkown</option>
            </select>
        <label className="label">Status</label>
          <div className="sub-label">Are you ready to make this job listing public?</div>    
            <select className="add-job-input" onChange={handleInputChange} name="status" value={job.status}>
              <option value="open">Open</option>
              <option value="pending">Pending</option>
              <option value="Closed">Closed</option>
            </select>
      </form>
      <div className="add-job-footer">
        <button onClick={handleSubmit}>submit</button>
        <button onClick={handleCancel} className="edit-button">Cancel</button>
      </div>
    </div>
	)
}

export default AddJob