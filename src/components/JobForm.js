import React, { useState }from 'react';
import { useHistory } from 'react-router-dom';

const JobForm = (props) => {
  const initialJobForm = { id: '', title: '', location: '', sponsorship: 'Sponsor', status: 'Open' };
  const [ job, setJob ] = useState(props.editing ? props.currentJob : initialJobForm);

  let history = useHistory();

   // Job form labels
   const labels = {
    title: 'Job title',
    location: 'Location',
    sponsorship: 'Sponsorship',
    status: 'Status'
  }

  // Job form sub labels
  const subLabels = {
    title: 'What is the name of the role?',
    location: 'Where is this job?',
    sponsorship: 'Do you want to promote this job?',
    status: 'Are you ready to make this job posting public?'
  }

  const handleInputChange = (event) => {
		const { name, value } = event.target

		setJob({ ...job, [name]: value })
	}

  // Edit job 
  const handleSubmit = (event) => {
    event.preventDefault()

    props.updateJob(job.id, job)

    history.push("/home")
  }

  // Add Job
  const handleAddJob = (event) => {
    event.preventDefault();
    if(!job.title || !job.location || !job.sponsorship || !job.status) 
    return

      props.addJob(job);
      props.setJob(initialJobForm);
      
      history.push("/home")
  };

  // Cancel form actions
  const handleCancel = (event) => {
    event.preventDefault();

    props.setAdding(false)
    props.setEditing(false)

    history.push("/home")
  }


  // Update header and subHeader based current form
  const header = props.currentJob ? 'Edit a job' : 'Add new job';

  const subHeader = props.currentJob ? 'Edit the information for your job listing.' : 'Fill out the information for your new job listing.';

  return (
    <div className="job-form-container">
      <div className="form-headers" tabIndex="0" role="heading" aria-level="1" aria-label={header + subHeader}>
        <div className="form-heading">
          {header}
        </div>
        <div className="form-sub-heading">
          {subHeader}
        </div>
      </div>
      <form className="job-form">
        <label className="label" tabIndex="0">{labels.title} *</label>
        <div className="sub-label" tabIndex="0">{subLabels.title}</div>
          <input className="input" tabIndex="0" type="text" name="title" value={props.currentJob ? job.title : null}  onChange={handleInputChange} />
        <label className="label" tabIndex="0">{labels.location} *</label>
        <div className="sub-label" tabIndex="0">{subLabels.location}</div>
          <input className="input" type="text" name="location" value={props.currentJob ? job.location : null} tabIndex="0"onChange={handleInputChange} />
        <label className="label" tabIndex="0">{labels.sponsorship} *</label>
        <div className="sub-label" tabIndex="0">{subLabels.sponsorship}</div>    
          <select className="select-input" name="sponsorship" value={props.currentJob ? job.sponsorship : null } onChange={handleInputChange}>
            <option value="Sponsor">Sponsor</option>
            <option value="Free">Free</option>
          </select>
        <label className="label" tabIndex="0">{labels.status} *</label>
        <div className="sub-label" tabIndex="0">{subLabels.status}</div> 
          <select className="select-input" onChange={handleInputChange} name="status" value={props.currentJob ? job.status : null} tabIndex="0">
            <option value="Open">Open</option>
            <option value="Paused">Paused</option>
            <option value="Closed">Closed</option>
          </select>
      </form>
      <div className="job-form--footer">
        <div className="footer-buttons">
          <button className="cancel-button" onClick={handleCancel}>Cancel</button>
          <button className="add-save-button" onClick={props.adding ? handleAddJob : handleSubmit}>{props.adding ? 'Add Job' : 'Save'}</button>
        </div>
      </div>
    </div>  
  )
}

export default JobForm;