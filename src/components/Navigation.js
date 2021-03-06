import React from 'react';
import profilePlaceholder from '../images/profilePlaceholder.svg';
import '../styles/Navigation.css';

const Navigation = () => {
  return (
    <div className="nav-container">
      <div className="nav-title" tabIndex="0" >Welcome to JobHob</div>
        <div className="user-profile">
          <img className="user-profile--image" alt="profile placeholder" tabIndex="0"  src={profilePlaceholder} />
          <div className="user-profile--info">
            <div className="user-profile--name" tabIndex="0">Andrea Cardona</div>
            <div className="user-profile--role" tabIndex="0">Admin</div>
          </div>
        </div>
     </div>
  );
}

export default Navigation;