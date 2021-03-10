import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/EditJob.css';

const EditJob = (props) => {
  const [ job, setJob ] = useState(props.currentJob)

  useEffect(() => {setJob(props.currentJob)},[ props ])

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setJob({ ...job, [name]: value })
  }
  
  let history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault()

    props.updateJob(job.id, job)

    history.push("/home")
  }

  const handleCancel = (event) => {
    event.preventDefault();

    props.setEditing(false)

    history.push("/home")
  }

  return (
    <div className="edit-job-container">
      <div className="edit-job-headers">
        <div className="edit-job-heading">
          Edit job
        </div>
        <div className="edit-job--sub-heading">
          Edit the information for your listing.
        </div>
      </div>
      <form className="edit-job-form">
        <label className="label">Title</label>
          <div className="sub-label">What is name of the role?</div>
          <input className="input" type="text" name="title" value={job.title} onChange={handleInputChange} />
        <label className="label">Location</label>
          <div className="sub-label">Where is this job?</div>
          <input className="input" type="text" name="location" value={job.location} onChange={handleInputChange} />
        <label  className="label">Sponsorship</label>
          <div className="sub-label">Do you want to promote this job?</div>
          <select className="select-input" onChange={handleInputChange} name="sponsorship" value={job.sponsorship}>
            <option value="Sponsor">Sponsor</option>
            <option value="Free">Free</option>
          </select>
        <label className="label">Status</label>
          <div className="sub-label">Are you ready to make this job listing public?</div>
          <select className="select-input" onChange={handleInputChange} name="status" value={job.status}>
            <option value="Open">Open</option>
            <option value="Paused">Paused</option>
            <option value="Closed">Closed</option>
          </select>
      </form>
      <div className="edit-job-footer">
        <div className="footer-button-container">
          <button className="cancel-button" onClick={handleCancel}>Cancel</button>
          <button className="update-button" onClick={handleSubmit}>Save</button>
        </div>
      </div>
    </div>
  )
}

export default EditJob