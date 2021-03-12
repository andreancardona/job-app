import React from 'react';
import { useHistory } from 'react-router-dom';
import CurrentDate from './CurrentDate';
import '../styles/jobCard.css';

const JobCard = (props) => {

  let history = useHistory();
  
  return (
    props.jobs.map((job) => (
      <div className="job-card" key={job.id} tabIndex="0" role="row">
        <div className="job-title-location">
          <div aria-label={"title" + job.title} className="title">{job.title}</div>
          <div aria-label={"location" + job.location} className="location">{job.location}</div>
        </div>
        <div className="job-post-details">
          <div aria-label={"posted" + job.posted} className="posted">{job.posted ? job.posted : <CurrentDate />}</div>
          <div aria-label={"sponsorship" + job.sponsorship} className="sponsorship">{job.sponsorship}</div>
          <div aria-label={"status" + job.status}  className="status">{job.status}</div>
          <button aria-label="edit job" className="edit-button" tabIndex="0" onClick={() => {props.editJob(job) || history.push("/job-form")}}>
            Edit
          </button>
        </div>
      </div>
    ))
  )
}

export default JobCard;