import React from 'react';
import JobCard from './JobCard';

// JobList component where pass down props: jobs & editJob
// Here we will handle the list view for all the jobs

const JobsList = (props) => {

  const jobListHeaders = {
    title: 'Job Title',
    posted: 'Posted',
    sponsorship: 'Sponsorship',
    status: 'Status'
  }

  return (
    <div aria-hidden="true" className="jobs-list-container" role="grid" id="job-list">
      <div id="job-list-headers" className="jobs-list-headers" tabIndex="0" role="row" aria-label="jobs listings">
        <div className="header-title" aria-label="title">{jobListHeaders.title}</div>
        <div className="header-posted" aria-label="posted">{jobListHeaders.posted}</div>
        <div className="header-sponsorship"  aria-label="sponsorhsip">{jobListHeaders.sponsorship}</div>
        <div className="header-status" aria-label="status">{jobListHeaders.status}</div>
      </div>
      <JobCard jobs={props.jobs} editJob={props.editJob}/>
    </div>
  )
}

export default JobsList;