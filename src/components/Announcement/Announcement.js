import React from "react";
import { Link } from "react-router-dom";
import s from "./Announcement.module.scss";

const Announcement = ({ title, description, date }) => {
  return (
    <div className={s.Announcement}>
      <Link to="/announcement/:id">
        <h2 className={s.title}>{title}</h2>
      </Link>
      <span className={s.description}>{description}</span>
      <span className={s.date}>{date}</span>
      <div className={s.buttonsContainer}>
        <Link to="edit">
          <button className={s.edit}>Edit</button>
        </Link>
        <button className={s.delete}>Delete</button>
      </div>
    </div>
  );
};

export default Announcement;
