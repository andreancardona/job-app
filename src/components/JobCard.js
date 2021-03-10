import React from 'react';
import { useHistory } from 'react-router-dom';
import CurrentDate from './CurrentDate';
import '../styles/jobCard.css';

const JobCard = (props) => {

  let history = useHistory();

  return (
    props.jobs.map((job) => (
      <div className="job-card" key={job.id}>
        <div className="job-title-location">
          <div className="title">{job.title}</div>
          <div className="location">{job.location}</div>
        </div>
        <div className="job-post-details">
          <div className="posted">{job.posted ? job.posted : <CurrentDate />}</div>
          <div className="sponsorship">{job.sponsorship}</div>
          <div className="status">{job.status}</div>
          <button className="edit-button" onClick={() => {props.editJob(job) || history.push("/edit-job")}}>
            Edit
          </button>
        </div>
      </div>
    ))
  )
}

export default JobCard;