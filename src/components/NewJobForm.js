import React, { useContext, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { JobContext } from '../context/JobContext';

const NewJobFrom = (route) => {
  let history = useHistory();

  const { jobs, editJob, addJob } = useContext(JobContext);

  const [ currentJob, setCurrentJob ] = useState({
    id: null,
    title: '',
    location: '',
  });

  const [ title, setTitle ] = useState('');
  const [ location, setLocation ] = useState('');

  const currentJobId = route.match.params.id;

  useEffect(() => {
    const jobId = currentJobId;
    const currentJob = jobs.find(
      (traverseCurrentJob) => traverseCurrentJob.id === parseInt(jobId)
    );

    setCurrentJob(currentJob);
  }, [currentJobId, jobs]);

  const handleSubmit = (event) => {
    event.preventDefault();
    editJob(currentJob);

    history.push("/");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const newJob = {
      id: jobs.length + 1,
      title,
      location,
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
  }
  
  // Job form sub labels
  const subLabels = {
    title: 'What is the title of the role?',
    location: 'Where is this job?',
  }  

  return (
    <div>
      <form className="job-form">
        <label className="label" tabIndex="0">{labels.title} *</label>
        <div className="sub-label" aria-label={subLabels.title} tabIndex="0">{subLabels.title}</div>
          <input className="input" aria-label="title" tabIndex="0" type="text" value={currentJob ? currentJob.title : null} onChange={currentJob ?  (e) => handleOnChange("title", e.target.value) : (e) => setTitle(e.target.value)}/>
        <label className="label" tabIndex="0">{labels.location} *</label>
        <div className="sub-label" aria-label={subLabels.location} tabIndex="0">{subLabels.location}</div>
          <input className="input" aria-label="title" type="text" value={currentJob ? currentJob.location : null} tabIndex="0" onChange={currentJob ? (e) => handleOnChange("location", e.target.value) : (e) => setLocation(e.target.value)}/>      
        <Link to="/">
          <button onClick={currentJob ? handleSubmit : onSubmit}>Submit</button>
        </Link>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </form>
  </div>
  )
}

export default NewJobFrom;