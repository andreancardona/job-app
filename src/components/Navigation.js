import React from 'react';
import profilePlaceholder from '../images/profilePlaceholder.svg';
import { useJobContext } from '../context/JobContext';

const Navigation = () => {

  const { navInfo } = useJobContext();
  
  return (
    <nav id="nav" className="nav-container">
      <div className="nav-title">{navInfo.title}</div>
      <a className="skip-content" href='#main'>Skip to main content</a>
      <div className="user-profile">
        <img className="user-profile--image" alt="profile placeholder" src={profilePlaceholder} />
        <div className="user-profile--info">
          <div className="user-profile--name">{navInfo.userName}</div>
          <div className="user-profile--role">{navInfo.userRole}</div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;