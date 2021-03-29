import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NewJobList from "./NewJobList";
import NewJobForm from "./NewJobForm";

const NewApp = () => {

  return (
    <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={NewJobList} />
        <Route exact path="/new-job-details/:id" component={NewJobForm}/>
      </Switch>
    </div>
  </BrowserRouter>
  )
};

export default NewApp;
