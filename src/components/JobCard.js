import React from 'react';
import { useHistory } from 'react-router-dom';
import CurrentDate from '../utils/CurrentDate';

const JobCard = (props) => {

  let history = useHistory();
  
  return (
    props.jobs.map((job) => (
      <div className="job-card" key={job.id} tabIndex="0">
        <div className="job-title-location">
          <div className="title" aria-label={"title" + job.title}>{job.title}</div>
          <div className="location" aria-label={"location" + job.location} >{job.location}</div>
        </div>
        <div className="job-post-details">
          <div className="posted" aria-label={"posted" + job.posted} >{job.posted ? job.posted : <CurrentDate />}</div>
          <div className="sponsorship" aria-label={"sponsorship" + job.sponsorship} >{job.sponsorship}</div>
          <div className="status" aria-label={"status" + job.status} >{job.status}</div>
          <button className="edit-button" tabIndex="0" aria-label="edit job" onClick={() => {props.editJob(job) || history.push("/job-form")}} >
            Edit
          </button>
        </div>
      </div>
    ))
  )
}

export default JobCard;