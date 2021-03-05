import React from 'react';
import '../styles/AddJobButton.css'
import { Link } from "react-router-dom";

const AddJobButton = () => {
  return (
    <Link to="/add-job" className="add-job-button">ADD JOB</Link>
  )
}

export default AddJobButton;