import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation'
import NewJobList from './NewJobList';
import NewJobForm from './NewJobForm';

const NewApp = () => {

  return (
    <div className="new-app-container">
      <Navigation />
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={NewJobList} />
            <Route exact path="/new-job-details/:id" component={NewJobForm}/>
          </Switch>
      </BrowserRouter>
    </div>
  )
};

export default NewApp;
