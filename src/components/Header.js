import React from 'react';
import AddJobButton from './AddJobButton';

const Header = (props) => {

  return (
    <div className="header-container">
      <div className="header-jobs" tabIndex="0" role="heading" aria-level="1">
        Jobs 
        <div className="listings-count">{props.jobs.length} listings</div>
      </div>
      <AddJobButton tabIndex="0" setAdd={props.setAdd}/>
    </div>
  )
}

export default Header;