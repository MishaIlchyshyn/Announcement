import React from "react";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import ListAnnouncement from "../ListAnnouncement/ListAnnouncement";
import CreateAnnouncement from "../CreateAnnouncement/CreateAnnouncement";
import Header from "../../components/Header/Header";
import { routes } from "../../routes";
import DetailAnnouncement from "../DetailAnnouncement/DetailAnnouncement";
import EditAnnouncement from "../EditAnnouncement/EditAnnouncement";
import FoundAnnouncements from "../FoundAnnouncements/FoundAnnouncements";

const Main = () => {
  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route exact path={routes.home}>
            <ListAnnouncement />
          </Route>
          <Route path={routes.create}>
            <CreateAnnouncement />
          </Route>
          <Route path={`${routes.detail}/:id`}>
            <DetailAnnouncement />
          </Route>
          <Route path={`${routes.edit}/:id`}>
            <EditAnnouncement />
          </Route>
          <Route path={routes.found}>
            <FoundAnnouncements />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Main;
