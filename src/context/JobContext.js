import React, { createContext, useReducer } from "react";
import jobReducer from './JobReducer';

// Navigation information
const navInfo = {
  title: 'JobHob',
  userName: 'Andrea Cardona',
  userRole: 'Admin'
}

// Initial list of jobs
const initialState = {
  jobs: [
    { id: 1, title: 'Product Manager', location: 'Austin, TX', posted: '10/04/2020', sponsorship: 'Free', status: 'Paused' },
    { id: 2, title: 'CEO', location: 'Austin, TX', posted: '12/30/2020', sponsorship: 'Sponsor', status: 'Closed'},
    { id: 3, title: 'Software Engineer', location: 'Seattle, WA', posted: '11/18/2020', sponsorship: 'Free', status: 'Open'},
  ]
}

export const JobContext = createContext();

export const JobProvider = ({ children }) => {

const [state, dispatch] = useReducer(jobReducer, initialState);

  function addJob(job) {
    dispatch({
      type: "ADD_JOB",
      payload: job
    });
  }

  function editJob(job) {
    dispatch({
      type: "EDIT_JOB",
      payload: job
    });
  }
  
  return (
    <JobContext.Provider
      value={{
        navInfo,
        jobs: state.jobs,
        addJob,
        editJob,
      }}
    >
      {children}
    </JobContext.Provider>
  ); 
}

export default JobProvider;