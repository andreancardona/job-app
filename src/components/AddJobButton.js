import React from 'react';
import '../styles/AddJobButton.css';
import { useHistory } from 'react-router-dom';

const AddJobButton = () => {
  let history = useHistory();

  const handleClick = (event) => {
    event.preventDefault()

    history.push("/add-job")
  }

  return (
    <button className="add-job-button" onClick={handleClick}>ADD JOB</button>
  )
}

export default AddJobButton;