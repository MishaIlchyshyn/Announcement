import React from "react";

import s from "./Header.module.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
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
    </div>
  );
};

export default Header;
