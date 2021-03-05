import React, {useState, Fragment} from 'react';
import Navigation from '../components/Navigation';
import JobsList from '../components/JobsList';
import EditJobs from '../components/EditJobs';
import AddJob from '../components/AddJob.js';
import '../styles/App.css';

const App = () => {
  const jobsList = [
    { id: 1, title: 'Astronaut', location: 'Austin, TX', posted: 'today', sponsorship: 'yes', status: 'none' },
    { id: 2, title: 'Barista', location: 'Austin, TX', posted: 'yesterday', sponsorship: 'yes', status: 'none'},
    { id: 3, title: 'Dancer', location: 'Austin, TX',posted: 'tomorrow', sponsorship: 'yes', status: 'none' },
  ]

  const initialFormState = { id: null, title: '', location: '', posted: '', sponsorship: '', status: '' };

  // Set our state / Read our list of jobs
  const [ jobs, setJobs ] = useState(jobsList)
	const [ currentJob, setCurrentJob ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)


  // Add a Job
  const addJob = job => {
		job.id = job.length + 1
		setJobs([ ...jobs, job ])
	}

  // Update a job
  const updateJob = (id, updatedJob) => {
		setEditing(false)

		setJobs(jobs.map(job => (job.id === id ? updatedJob : job)))
	}

  // Allow user to edit job
  const editJob = job => {
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

  return (
  <div className="app-container">
      <Navigation />
      <JobsList jobs={jobs} editJob={editJob} addJob={addJob}/>
      {editing ? (
      <div>
          <h2>Edit Job</h2>
          <EditJobs
            editing={editing}
            setEditing={setEditing}
            currentJob={currentJob}
            updateJob={updateJob}
          />
        </div>
      ) : (
        <Fragment>
        <h2>Add Job</h2>
						<AddJob addJob={addJob} setEditing={setEditing}/>
        </Fragment>
      )}
    </div>
  )
};

export default App;
