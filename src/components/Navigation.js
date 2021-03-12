import React from 'react';
import profilePlaceholder from '../images/profilePlaceholder.svg';
import '../styles/navigation.css';

const Navigation = ({ props }) => {
  
  return (
    <nav className="nav-container">
      <div className="nav-title">{props.title}</div>
      <a className="skip-content" href='#main'>Skip to main content</a>
      <div className="user-profile">
        <img className="user-profile--image" alt="profile placeholder" src={profilePlaceholder} />
        <div className="user-profile--info">
          <div className="user-profile--name">{props.userName}</div>
          <div className="user-profile--role">{props.userRole}</div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;