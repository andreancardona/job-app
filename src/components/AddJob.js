import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/addJobButton.css';
import '../styles/jobForm.css';

const AddJob = (props) => {
  const initialState = { id: '', title: '', location: '', sponsorship: 'Sponsor', status: 'Open' };
	const [ job, setJob ] = useState(initialState);

  // const [ job, setJob ] = useState(props.currentJob)

  // useEffect(() => {setJob(props.currentJob)},[ props ])

  const header = props.adding ? 'Add a new job' : 'Edit job'

  const subHeader = props.adding ? 'Add a new job' : 'Edit job'

  const labels = {
    title: 'Job title',
    location: 'Location',
    sponsorship: 'Sponsorship',
    status: 'Status'
  }

  const subLabels = {
    title: 'What is the name of the role?',
    location: 'Where is this job?',
    sponsorship: 'Do you want to promote this job?',
    status: 'Are you ready to make this job  pooosting  public?'
  }

	const handleInputChange = (event) => {
		const { name, value } = event.target

		setJob({ ...job, [name]: value })
	}

  let history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!job.title || !job.location || !job.sponsorship || !job.status) 
    return

      props.addJob(job);
        setJob(initialState);
      
      history.push("/home")
  };

  const handleCancel = (event) => {
    event.preventDefault();

    props.setAdding(false)
    props.setEditing(false)

    history.push("/home")
  }

  console.log('addJOB', props.adding)

	return (
    <div className="job-form-container">
      <div className="form-headers">
        <div className="form-heading">
          {header}
        </div>
        <div className="form-sub-heading">
          {subHeader}
        </div>
      </div>
      <form className="job-form">
        <label className="label">{labels.title}</label>
          <div className="sub-label">{subLabels.title}</div>
          <input className="input" type="text" name="title" value={job.title} onChange={handleInputChange} />
        <label className="label">{labels.location}</label>
          <div className="sub-label">{subLabels.location}?</div>
          <input className="input" type="text" name="location" value={job.location} onChange={handleInputChange} />
        <label className="label">{labels.sponsorship}</label>
          <div className="sub-label">{subLabels.sponsorship}</div>    
            <select className="select-input" name="sponsorship" onChange={handleInputChange} value={job.sponsorship}>
              <option value="Sponsor">Sponsor</option>
              <option value="Free">Free</option>
            </select>
        <label className="label">{labels.status}</label>
          <div className="sub-label">{subLabels.status}</div> 
            <select className="select-input" onChange={handleInputChange} name="status" value={job.status}>
              <option value="Open">Open</option>
              <option value="Paused">Paused</option>
              <option value="Closed">Closed</option>
            </select>
      </form>
      <div className="job-form--footer">
        <div className="footer-buttons">
          <button className="cancel-button" onClick={handleCancel}>Cancel</button>
          <button className="add-job-button" onClick={handleSubmit}>Add job</button>
        </div>
      </div>
    </div>
	)
}

export default AddJob