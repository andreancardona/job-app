import '../styles/JobsList.css';

const JobsList = props => {
  return (
    <div className="jobs-list-container">
      <div className="jobs-list-headers" tabIndex="0">
        <div className="header-title">Job Title</div>
        <div className="header-posted">Posted</div>
        <div className="header-sponsorship">Sponsorship</div>
        <div className="header-status">Status</div>
      </div>
      {props.jobs.length > 0 ? (
        props.jobs.map(job => (
          <div className="job-tile" key={job.id}>
            <div className="job-title-location">
              <div clasName="title">{job.title}</div>
              <div clasName="location">{job.location}</div>
            </div>
            <div clasName="posted">{job.posted}</div>
            <div className="sponsorhip">{job.sponsorship}</div>
            <div className="status">{job.status}</div>
            <div>
            <button
                onClick={() => {
                  props.editJobRow(job)
                }}
                className="edit-button"
              >
                Edit
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="job-tile">
          <div>No Jobs</div>
        </div>
      )}
      </div>
  )
}

export default JobsList;