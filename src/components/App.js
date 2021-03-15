import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from './Navigation';
import Header from './Header';
import JobsList from '../components/JobsList';
import JobForm from './JobForm';

const App = () => {

  // Navigation props
  const navProps = {
    title: 'JobHob',
    userName: 'Andrea Cardona',
    userRole: 'Admin'
  }

  // Initial list of jobs
  const jobsList = [
    { id: 1, title: 'Product Manager', location: 'Austin, TX', posted: '10/04/2020', sponsorship: 'Free', status: 'Open' },
    { id: 2, title: 'CEO', location: 'Austin, TX', posted: '12/30/2020', sponsorship: 'Sponsored', status: 'Paused'},
    { id: 3, title: 'Software Engineer', location: 'Seattle, WA', posted: '11/18/2020', sponsorship: 'Free', status: 'Closed' },
  ]

  // Initial state of our job form
  const initialJobForm = { id: '', title: '', location: '', sponsorship: '', status: '' };

  // Set our state / read our list of jobs
  const [ jobs, setJobs ] = useState(jobsList)
  const [ job, setJob ] = useState(initialJobForm);
	const [ currentJob, setCurrentJob ] = useState(initialJobForm)
	const [ editing, setEditing ] = useState(false)
  const [ adding, setAdding ] = useState(false)

  // Update set add job state
  const setAdd = () => {
    setAdding(true);
  }

  // Add a job
  const addJob = (job) => {
		job.id = jobs.length + 1
    const newJobs = [...jobs, job]

		setJobs(newJobs);
	}

  // Allow user to edit job
  const editJob = (job) => {
    setEditing(true)

    setCurrentJob({ 
      id: job.id, 
      title: job.title, 
      location: job.location, 
      sponsorship: job.sponsorship, 
      status: job.status 
    })
  }

  // Update a job
  const updateJob = (id, jobBeingUpdated) => {
		setEditing(false)
    const updatedJob = jobs.map(job => (job.id === id ? jobBeingUpdated : job))

		setJobs(updatedJob);
	}

  return (
    <div role="contentinfo" className="app-container">
      <Navigation props={navProps}/>
      <Router>
          <Switch>
            <Route path="/home" component={() => 
              <main id="main" role="main">
                <Header jobs={jobs} setAdd={setAdd}/>
                <JobsList jobs={jobs} editJob={editJob}/>
              </main>
            } />
            <Route path="/job-form" component={() => 
              editing
              ? <JobForm
                  job={job}
                  jobs={jobs} 
                  editing={editing}
                  adding={adding}
                  setJob={setJob}
                  addJob={addJob} 
                  editJob={editJob}
                  currentJob={currentJob}
                  updateJob={updateJob}
                  setAdding={setAdding} 
                  setEditing={setEditing}
                /> 
              : 
                <JobForm
                  job={job}
                  jobs={jobs} 
                  editing={editing}
                  adding={adding}
                  setJob={setJob}
                  addJob={addJob} 
                  editJob={editJob}
                  currentJob={currentJob}
                  updateJob={updateJob}
                  setAdding={setAdding} 
                  setEditing={setEditing}
                />}
             /> 
          </Switch>
      </Router>
    </div>
  )
};

export default App;
