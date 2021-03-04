import Navigation from './Navigation';
import JobTile from './JobTile';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <div className="banner" role="banner">
        <Navigation />
        {/* Jobs title and add jobs functionality */}
        <JobTile />
      </div>
    </div>
  );
}

export default App;
