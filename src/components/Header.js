import React from 'react';
import AddJobButton from './AddJobButton';
import '../styles/header.css';


const Header = (props) => {
  return (
    <div className="header-container">
      <div className="header-jobs">
        Jobs 
        <div className="listings-count">{props.jobs.length} listings</div>
      </div>
      <AddJobButton />
    </div>
  )
}

export default Header;