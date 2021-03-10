import React from 'react';
import '../styles/addJobButton.css';
import { useHistory } from 'react-router-dom';

const AddJobButton = (props) => {
  
  let history = useHistory();

  return (
    <button className="add-job-button" onClick={() => {props.setAdd() || history.push("/job-form")}}>
      Add job
    </button>
  )
}

export default AddJobButton;