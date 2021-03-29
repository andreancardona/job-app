import React, { createContext, useReducer } from "react";
import jobReducer from './JobReducer';

// Initial list of jobs
const initialState = {
  jobs: [
    { id: 1, title: 'Product Manager', location: 'Austin, TX'},
    { id: 2, title: 'CEO', location: 'Austin, TX'},
    { id: 3, title: 'Software Engineer', location: 'Seattle, WA'},
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