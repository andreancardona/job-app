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
    { id: 1, title: 'Product Manager', location: 'Austin, TX', posted: '10/04/2020', sponsorship: 'Free', status: 'Open' },
    { id: 2, title: 'CEO', location: 'Austin, TX', posted: '12/30/2020', sponsorship: 'Sponsored', status: 'Paused'},
    { id: 3, title: 'Software Engineer', location: 'Seattle, WA', posted: '11/18/2020', sponsorship: 'Free', status: 'Closed' },
  ]

  const initialState = { id: '', title: '', location: '', sponsorship: '', status: '' };

  // Set our state / Read our list of jobs
  const [ jobs, setJobs ] = useState(jobsList)
	const [ currentJob, setCurrentJob ] = useState(initialState)
	const [ editing, setEditing ] = useState(false)

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
            <EditJob
              jobs={jobs}
              editing={editing}
              setEditing={setEditing}
              currentJob={currentJob}
              updateJob={updateJob}
            />  
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
