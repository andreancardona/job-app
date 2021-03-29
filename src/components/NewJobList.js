import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { JobContext } from '../context/JobContext';

const NewJobList = () => {

  const { jobs } = useContext(JobContext);

  const job = jobs.map(job => {
    return job;
  })

  return (
    <div>
      {jobs.map(job => {
        return (
          <div key={job.id}>
            {job.title}
            {job.location}
            <Link to={{pathname: `/new-job-details/${job.id}`}}>
              <button>Edit</button>
            </Link>
          </div>
        );
      })}
      <Link to={{pathname: `/new-job-details/${job.id}`}}>
        <button>ADD JOB</button>
      </Link>
    </div>
  );
};

export default NewJobList;