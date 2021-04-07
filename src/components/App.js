import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation'
import JobList from './JobList';
import JobForm from './JobForm';

const App = () => {

  return (
    <div className="app-container">
      <Navigation />
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={JobList} />
            <Route exact path="/new-job-details/:id" component={JobForm}/>
          </Switch>
      </BrowserRouter>
    </div>
  )
};

export default App;
