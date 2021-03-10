import React from 'react';
import '../styles/addJobButton.css';
import { useHistory } from 'react-router-dom';

const AddJobButton = () => {
  let history = useHistory();

  const handleClick = (event) => {
    event.preventDefault()

    history.push("/add-job")
  }

  return (
    <button className="add-job-button" onClick={handleClick}>Add job</button>
  )
}

export default AddJobButton;