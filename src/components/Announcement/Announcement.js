import React from "react";
import { Link, useHistory } from "react-router-dom";
import s from "./Announcement.module.scss";
import { routes } from "../../routes";

const Announcement = ({ title, description, date, id, deleteAnnouncement }) => {
  const dateFormat = require("dateformat");

  const history = useHistory();

  return (
    <div className={s.Announcement}>
      <Link to={`${routes.detail}/${id}`}>
        <h2 className={s.title}>{title}</h2>
      </Link>
      <span className={s.description}>{description}</span>
      <span className={s.date}>
        {dateFormat(date, "ddd mmm dd yyyy HH:MM:ss")}
      </span>
      <div className={s.buttonsContainer}>
        <Link to={`${routes.edit}/${id}`}>
          <button className={s.edit}>Edit</button>
        </Link>
        <button
          className={s.delete}
          onClick={() => deleteAnnouncement(id, history)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Announcement;
