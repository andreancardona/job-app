import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import JobForm from './JobForm';
import '../styles/_job-form.scss';
import '../styles/_buttons.scss';

const EditJob = (props) => {
  const [ job, setJob ] = useState(props.currentJob)
  
  let history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault()

    props.updateJob(job.id, job)

    history.push("/home")
  }

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
          <button className="add-save-button" onClick={handleSubmit}>Save</button>
        </div>
      </div>
    </div>
  )
}

export default EditJob