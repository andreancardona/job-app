import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from './Navigation';
import Header from './Header';
import JobsList from '../components/JobsList';
import EditJob from './EditJob';
import AddJob from '../components/AddJob.js';
import '../styles/app.css';

const App = () => {
  // Navigation props
  const navProps = {
    title: 'JobHob',
    userName: 'Andrea Batlle',
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

  // Job form labels
  const labels = {
    title: 'Job title',
    location: 'Location',
    sponsorship: 'Sponsorship',
    status: 'Status'
  }

  // Job form sub labels
  const subLabels = {
    title: 'What is the name of the role?',
    location: 'Where is this job?',
    sponsorship: 'Do you want to promote this job?',
    status: 'Are you ready to make this job  pooosting  public?'
  }

  // Set our state / read our list of jobs
  const [ jobs, setJobs ] = useState(jobsList)
	const [ currentJob, setCurrentJob ] = useState(initialJobForm)
	const [ editing, setEditing ] = useState(false)
  const [ adding, setAdding ] = useState(false)


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

  // Take user to add job form
  const setAdd = () => {
    setAdding(true);
  }

  // Add a job
  const addJob = (job) => {
		job.id = jobs.length + 1
    const newJobs = [...jobs, job]

		setJobs(newJobs);
	}

  // Update a job
  const updateJob = (id, jobBeingUpdated) => {
		setEditing(false)
    const updatedJob = jobs.map(job => (job.id === id ? jobBeingUpdated : job))

		setJobs(updatedJob);
	}

  return (
    <div className="app-container">
      <Navigation props={navProps}/>
      <Router>
          <Switch>
            <Route path="/home" component={() => 
              <Fragment>
                <Header jobs={jobs} addJob={addJob} setAdd={setAdd}/>
                <JobsList jobs={jobs} editJob={editJob}/>
              </Fragment>
            } />
            <Route path="/job-form" component={() => 
              editing
              ? <EditJob
                  labels={labels}
                  subLabels={subLabels}
                  jobs={jobs}
                  editing={editing}
                  setEditing={setEditing}
                  currentJob={currentJob}
                  updateJob={updateJob}
                /> 
              : adding ? 
                <AddJob 
                  labels={labels}
                  subLabels={subLabels}
                  adding={adding}
                  setAdding={setAdding} 
                  jobs={jobs} 
                  addJob={addJob} 
                  edditing={editing}
                  setEditing={setEditing}
                />
              : <AddJob 
                  labels={labels}
                  subLabels={subLabels}
                  adding={adding}
                  setAdding={setAdding} 
                  jobs={jobs} 
                  addJob={addJob} 
                  edditing={editing}
                  setEditing={setEditing}
                /> 
            } /> 
          </Switch>
      </Router>
    </div>
  )
};

export default App;
