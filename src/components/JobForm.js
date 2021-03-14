import React, { Fragment }from 'react';

const JobForm = (props) => {

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
    status: 'Are you ready to make this job  pooosting  public?'
  }

  const handleInputChange = (event) => {
		const { name, value } = event.target

		props.setJob({ ...props.job, [name]: value })
	}

  // Update header and subHeader based current form
  const header = props.adding ? 'Add a new job' : 'Edit a job';

  const subHeader = props.adding ? 'Fill out the information for your new job listing.' : 'Edit the information for your job listing.';

  return (
    <Fragment>
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
          <input className="input" tabIndex="0" type="text" name="title" value={props.job.title} onChange={handleInputChange} />
        <label className="label" tabIndex="0">{labels.location} *</label>
        <div className="sub-label" tabIndex="0">{subLabels.location}</div>
          <input className="input" type="text" name="location" value={props.job.location}tabIndex="0"onChange={handleInputChange} />
        <label className="label" tabIndex="0">{labels.sponsorship} *</label>
        <div className="sub-label" tabIndex="0">{subLabels.sponsorship}</div>    
          <select className="select-input" name="sponsorship" onChange={handleInputChange} value={props.job.sponsorship}>
            <option value="Sponsor">Sponsor</option>
            <option value="Free">Free</option>
          </select>
        <label className="label" tabIndex="0">{labels.status} *</label>
        <div className="sub-label" tabIndex="0">{subLabels.status}</div> 
          <select className="select-input" onChange={handleInputChange} name="status" value={props.job.status} tabIndex="0">
            <option value="Open">Open</option>
            <option value="Paused">Paused</option>
            <option value="Closed">Closed</option>
          </select>
      </form>
    </Fragment>  
  )
}

export default JobForm;