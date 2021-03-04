import profilePlaceholder from '../images/profilePlaceholder.svg';
import '../styles/Navigation.css';

function App() {
    return (
    <div className="nav-container">
        <div className="header" tabIndex="0" >Welcome to JobHob</div>
          <img className="user-profile--image" alt="profile placeholder" tabIndex="0"  src={profilePlaceholder} />
            <div className="user-info">
            <div className="user-profile--name" tabIndex="0">Andrea Cardona</div>
            <div className="user-profile--role" tabIndex="0">Admin</div>
        </div>
    </div>
);
}

export default App;