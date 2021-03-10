import React from 'react';
import JobCard from './JobCard';
import '../styles/jobsList.css';

// JobList component where pass down props: jobs & editJob
// Here we will handle the list view for all the jobs

const JobsList = (props) => {

  console.log(props)

  const jobListHeaders = {
    title: 'Job Title',
    posted: 'Posted',
    sponsorship: 'Sponsorship',
    status: 'Status'
  }

  return (
    <div className="jobs-list-container">
      <section className="jobs-list-headers" tabIndex="0">
        <div className="header-title">{jobListHeaders.title}</div>
        <div className="header-posted">{jobListHeaders.posted}</div>
        <div className="header-sponsorship">{jobListHeaders.sponsorship}</div>
        <div className="header-status">{jobListHeaders.status}</div>
      </section>
      <JobCard jobs={props.jobs} editJob={props.editJob}/>
    </div>
  )
}

export default JobsList;