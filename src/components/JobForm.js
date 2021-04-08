import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useJobContext } from '../context/JobContext';

const JobForm = (route) => {
  let history = useHistory();

  // bring in context actions from JobContext
  const { jobs, editJob, addJob } = useJobContext();

  // set state for editing a current Job
  const [ currentJob, setCurrentJob ] = useState({
    id: null,
    title: '',
    location: '',
    sponsorship: '',
    status: ''
  });

  // set state for adding a new Job
  const [ title, setTitle ] = useState('');
  const [ location, setLocation ] = useState('');
  const [ sponsorship, setSponsorship ] = useState('Sponsor');
  const [ status, setStatus ] = useState('Open');

  // find which job is currently being updated
  const currentJobId = route.match.params.id;

  useEffect(() => {
    const jobId = currentJobId;
    const currentJob = jobs.find(
      (findCurrentJob) => findCurrentJob.id === parseInt(jobId)
    );

    setCurrentJob(currentJob);
  }, [currentJobId, jobs]);

  // edit current job: handleSubmit push back to homepage
  const handleSubmit = (event) => {
    event.preventDefault();
    editJob(currentJob);

    history.push("/");
  };

  // add new job: onSubmit push back to homepage
  const onSubmit = (event) => {
    event.preventDefault();
    const newJob = {
      id: jobs.length + 1,
      title,
      location,
      sponsorship,
      status
    };
    addJob(newJob);
    history.push("/");
  };

  const handleOnChange = (name, value) => {
    setCurrentJob({ ...currentJob, [name]: value });
  }

  // Job form labels
  const labels = {
    title: 'Job title',
    location: 'Location',
    sponsorship: 'Sponsorship',
    status: 'Status'
  }
  
  // Job form sub labels
  const subLabels = {
    title: 'What is the title of the role?',
    location: 'Where is this job?',
    sponsorship: 'Do you want to promote this job?',
    status: 'Are you ready to make this job posting public?'
  }
  
  // Update header and subHeader based editing or adding job
  const header = currentJob ? 'Edit a Job' : 'Add a new Job';

  const subHeader = currentJob ? 'Edit the information for your job listing.' : 'Fill out the information for your new job listing.';

  return (
    <div className="job-form-container">
      <div className="form-headers" tabIndex="0" role="heading" aria-level="1" aria-label={header + subHeader}>
        <div className="form-heading">{header}</div>
        <div className="form-sub-heading">{subHeader}</div>
      </div>
      <form className="job-form">
        <label className="label" tabIndex="0">{labels.title} *</label>
        <div className="sub-label" aria-label={subLabels.title} tabIndex="0">{subLabels.title}</div>
          <input 
            className="input" 
            aria-label="title" 
            tabIndex="0" 
            type="text" 
            value={currentJob ? currentJob.title : null} 
            onChange={currentJob ? (event) => handleOnChange("title", event.target.value) : (event) => setTitle(event.target.value)}/>
        <label className="label" tabIndex="0">{labels.location} *</label>
        <div className="sub-label" aria-label={subLabels.location} tabIndex="0">{subLabels.location}</div>
          <input 
            className="input" 
            aria-label="title" type="text" 
            value={currentJob ? currentJob.location : null} 
            tabIndex="0" 
            onChange={currentJob ? (event) => handleOnChange("location", event.target.value) : (event) => setLocation(event.target.value)}/>
        <label className="label" aria-label={subLabels.sponsorship} tabIndex="0">{labels.sponsorship} *</label>
        <div className="sub-label"  aria-label={subLabels.sponsorship} tabIndex="0">{subLabels.sponsorship}</div>    
          <select 
            className="select-input" 
            aria-label="sponsorship options" 
            name="sponsorship" 
            value={currentJob ? currentJob.sponsorship : 'Sponsor'} 
            onChange={currentJob ? (event) => handleOnChange('sponsorship', event.target.value) : (event) => setSponsorship(event.target.value)} tabIndex="0">
            <option value="Sponsor">Sponsor</option>
            <option value="Free">Free</option>
          </select> 
        <label className="label" aria-label={subLabels.status} tabIndex="0">{labels.status} *</label>
        <div className="sub-label" aria-label={subLabels.status}  tabIndex="0">{subLabels.status}</div> 
          <select 
            className="select-input" 
            aria-label="status options" 
            value={currentJob ? currentJob.status : 'Open'} 
            onChange={currentJob ? (event) => handleOnChange('status', event.target.value) : (event) => setStatus(event.target.value)} tabIndex="0">
            <option value="Open">Open</option>
            <option value="Paused">Paused</option>
            <option value="Closed">Closed</option>
          </select>     
      </form>
      <div className="job-form--footer">
        <div className="footer-buttons">
          <Link to="/">
            <button className="add-save-button" onClick={currentJob ? handleSubmit : onSubmit}>Submit</button>
          </Link>
          <Link to="/">
            <button className="cancel-button">Cancel</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default JobForm;