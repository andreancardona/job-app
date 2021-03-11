import React, { Fragment }from 'react';
import '../styles/jobForm.css';

const JobForm = (props) => {
  const handleInputChange = (event) => {
		const { name, value } = event.target

		props.setJob({ ...props.job, [name]: value })
	}


  const header = props.adding ? 'Add a new job' : 'Edit a job';

  const subHeader = props.adding ? 'Fill out the information for your new job listing.' : 'Edit the information for your job listing.';

  return (
    <Fragment>
      <div className="form-headers">
      <div className="form-heading">
        {header}
      </div>
      <div className="form-sub-heading">
        {subHeader}
      </div>
      </div>
      <form className="job-form">
        <label className="label">{props.labels.title}</label>
          <div className="sub-label">{props.subLabels.title}</div>
          <input className="input" type="text" name="title" value={props.job.title} onChange={handleInputChange} />
        <label className="label">{props.labels.location}</label>
          <div className="sub-label">{props.subLabels.location}</div>
          <input className="input" type="text" name="location" value={props.job.location} onChange={handleInputChange} />
        <label className="label">{props.labels.sponsorship}</label>
          <div className="sub-label">{props.subLabels.sponsorship}</div>    
            <select className="select-input" name="sponsorship" onChange={handleInputChange} value={props.job.sponsorship}>
              <option value="Sponsor">Sponsor</option>
              <option value="Free">Free</option>
            </select>
        <label className="label">{props.labels.status}</label>
          <div className="sub-label">{props.subLabels.status}</div> 
            <select className="select-input" onChange={handleInputChange} name="status" value={props.job.status}>
              <option value="Open">Open</option>
              <option value="Paused">Paused</option>
              <option value="Closed">Closed</option>
            </select>
      </form>
    </Fragment>  
  )
}

export default JobForm;