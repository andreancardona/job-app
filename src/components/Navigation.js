import React from 'react';
import profilePlaceholder from '../images/profilePlaceholder.svg';
import '../styles/navigation.css';

const Navigation = ({ props }) => {
  
  return (
    <div className="nav-container">
      <div className="nav-title" tabIndex="0" >{props.title}</div>
      <div className="user-profile">
        <img className="user-profile--image" alt="profile placeholder" tabIndex="0"  src={profilePlaceholder} />
        <div className="user-profile--info">
          <div className="user-profile--name" tabIndex="0">{props.userName}</div>
          <div className="user-profile--role" tabIndex="0">{props.userRole}</div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;