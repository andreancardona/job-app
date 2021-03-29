export default function appReducer(state, action) {
  switch (action.type) {
    case "EDIT_JOB":
      const updatedJob = action.payload;

      const updatedJobs = state.jobs.map((job) => {
        if (job.id === updatedJob.id) {
          return updatedJob;
        }
        return job;
      });

      return {
        ...state,
        jobs: updatedJobs,
      };

      case "ADD_JOB":
        return {
          ...state,
          jobs: [...state.jobs, action.payload],
        };  

    default:
      return state;
  }
};