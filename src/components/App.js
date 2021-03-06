import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Header';
import JobsList from '../components/JobsList';
import EditJob from './EditJob';
import AddJob from '../components/AddJob.js';
import '../styles/App.css';

const App = () => {
  // Our list of jobs
  const jobsList = [
    { id: 1, title: 'Astronaut', location: 'Austin, TX', posted: 'today', sponsorship: 'yes', status: 'none' },
    { id: 2, title: 'Barista', location: 'Austin, TX', posted: 'yesterday', sponsorship: 'yes', status: 'none'},
    { id: 3, title: 'Dancer', location: 'Austin, TX',posted: 'tomorrow', sponsorship: 'yes', status: 'none' },
  ]

  const initialFormState = { id: '', title: '', location: '', posted: '', sponsorship: '', status: '' };

  // Set our state / Read our list of jobs
  const [ jobs, setJobs ] = useState(jobsList)
	const [ currentJob, setCurrentJob ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

 // Allow user to edit job
 const editJob = (job) => {
  setEditing(true)

  setCurrentJob({ 
    id: job.id, 
    title: job.title, 
    location: job.location, 
    posted: job.posted, 
    sponsorship: job.sponsorship, 
    status: job.status 
  })
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
      <Router>
          <Switch>
            <Route path="/home" component={() => 
            <Fragment>
              <Header jobs={jobs}/>
              <JobsList jobs={jobs} editJob={editJob} addJob={addJob}/>
            </Fragment>
            } />
            <Route path="/edit-job" component={() => 
            editing ?
            <EditJob
              jobs={jobs}
              editing={editing}
              setEditing={setEditing}
              currentJob={currentJob}
              updateJob={updateJob}
            /> : null 
            } />
            <Route path="/add-job" component={() => 
            <AddJob jobs={jobs} addJob={addJob} setEditing={setEditing}/> 
          }/> 
          </Switch>
      </Router>
    </div>
  )
};

export default App;
