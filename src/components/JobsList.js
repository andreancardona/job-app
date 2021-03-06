import React from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/JobsList.css';

// JobList component where pass down props: jobs & editJob
// Here we will handle the list view for all the jobs
const JobsList = (props) => {

  let history = useHistory();
  
  return (
    <div className="jobs-list-container">
      <div className="jobs-list-headers" tabIndex="0">
        <div className="header-title">Job Title</div>
        <div className="header-posted">Posted</div>
        <div className="header-sponsorship">Sponsorship</div>
        <div className="header-status">Status</div>
      </div>
      {/* We are mapping over our list of jobs to be rendered and viewed. 
      If data was not already provided check for items in list  */}
      {props.jobs.map((job) => (
        <div className="job-tile" key={job.id}>
          <div className="job-title-location">
            <div clasName="title">{job.title}</div>
            <div clasName="location">{job.location}</div>
          </div>
          <div clasName="posted">{job.posted}</div>
          <div className="sponsorhip">{job.sponsorship}</div>
          <div className="status">{job.status}</div>
          <button className="edit-button" onClick={() => {props.editJob(job) || history.push("/edit-job")}}>
            Edit
          </button>
          <div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default JobsList;