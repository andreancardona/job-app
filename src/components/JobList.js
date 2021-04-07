import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { JobContext } from '../context/JobContext';
import CurrentDate from '../utils/CurrentDate';

const JobList = () => {

  const { jobs } = useContext(JobContext);

  const job = jobs.map(job => {
    return job;
  })

  const jobListHeaders = {
    title: 'Job Title',
    posted: 'Posted',
    sponsorship: 'Sponsorship',
    status: 'Status'
  }

  return (
    <div className="jobs-container">
      <div className="header-container">
        <div className="header-jobs" tabIndex="0" role="heading" aria-level="1">
          Jobs 
          <div className="listings-count">{jobs.length} listings</div>
        </div>
        <Link to={{pathname: `/new-job-details/${job.id}`}}>
         <button className="add-save-button">ADD JOB</button>
       </Link>
      </div>
      <div aria-hidden="true" className="jobs-list-container" role="grid" id="job-list">
        <div id="job-list-headers" className="jobs-list-headers" tabIndex="0" role="row" aria-label="jobs listings">
          <div className="header-title" aria-label="title">{jobListHeaders.title}</div>
          <div className="header-posted" aria-label="posted">{jobListHeaders.posted}</div>
          <div className="header-sponsorship"  aria-label="sponsorhsip">{jobListHeaders.sponsorship}</div>
          <div className="header-status" aria-label="status">{jobListHeaders.status}</div>
        </div>
        {jobs.map(job => {
          return (
            <div className="job-card" tabIndex="0" key={job.id}>
              <div className="job-title-location">
                <div className="title" aria-label={"title" + job.title}>{job.title}</div>
                <div className="location" aria-label={"location" + job.location}>{job.location}</div>
              </div>
              <div className="job-post-details">
                <div className="posted" aria-label={"posted" + job.posted}>{job.posted ? job.posted : <CurrentDate />}</div>
                <div className="sponsorship" aria-label={"sponsorship" + job.sponsorship}>{job.sponsorship}</div>
                <div className="status" aria-label={"status" + job.status}>{job.status}</div>
                <Link to={{pathname: `/new-job-details/${job.id}`}}>
                  <button className="edit-button">Edit</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JobList;