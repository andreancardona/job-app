import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import JobForm from './JobForm';
import '../styles/addJobButton.css';
import '../styles/jobForm.css';

const AddJob = (props) => {
  const initialState = { id: '', title: '', location: '', sponsorship: 'Sponsor', status: 'Open' };
	const [ job, setJob ] = useState(initialState);

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

	return (
    <div className="job-form-container">
      <JobForm 
        adding={props.adding} 
        labels={props.labels} 
        subLabels={props.subLabels} 
        job={job} 
        setJob={setJob}
      />
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