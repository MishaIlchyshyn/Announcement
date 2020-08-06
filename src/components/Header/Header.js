import React from "react";

import { compose, withState, withHandlers } from "recompose";
import { connect } from "react-redux";
import * as announcementsOperations from "../../modules/announcements/announcementsOperations";
import s from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import { routes } from "../../routes";
import Search from "../Search/Search";

const Header = ({ handleSearchAnnouncement }) => {
  const activeLink = {
    color: "#636363",
  };

  return (
    <div className={s.Header}>
      <NavLink exact className={s.link} activeStyle={activeLink} to="/">
        Home
      </NavLink>
      <NavLink className={s.link} activeStyle={activeLink} to="/create">
        Create
      </NavLink>

      <Search handleSearchAnnouncement={handleSearchAnnouncement} />
    </div>
  );
};

const mapDispatchToProps = {
  searchAnnouncement: announcementsOperations.actions.searchAnnouncement,
};

const mapStateToProps = (state) => ({
  list: state.announcements.announcements,
});

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withState(),
  withHandlers({
    handleSearchAnnouncement: (props) => (inputSearch, history) => {
      console.log(inputSearch);
      props.searchAnnouncement(inputSearch);
      history.push(routes.found);
    },
  })
);

export default enhancer(Header);
