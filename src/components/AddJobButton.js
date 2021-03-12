import React from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/_buttons.scss'

const AddJobButton = (props) => {
  
  let history = useHistory();

  return (
    <button className="add-save-button" onClick={() => {props.setAdd() || history.push("/job-form")}}>
      Add job
    </button>
  )
}

export default AddJobButton;