import React from "react";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import ListAnnouncement from "../ListAnnouncement/ListAnnouncement";
import CreateAnnouncement from "../CreateAnnouncement/CreateAnnouncement";
import Header from "../../components/Header/Header";

const Main = () => {
  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route exact path="/">
            <ListAnnouncement />
          </Route>
          <Route path="/create">
            <CreateAnnouncement />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Main;
