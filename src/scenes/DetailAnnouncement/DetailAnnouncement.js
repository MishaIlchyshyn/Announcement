import React from "react";
import { compose, withState, withHandlers } from "recompose";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import * as announcementsOperations from "../../modules/announcements/announcementsOperations";
import s from "./DetailAnnouncement.module.scss";
import { routes } from "../../routes";
import { similar } from "../../utils/similar";
import Announcement from "../../components/Announcement/Announcement";

const DetailAnnouncement = ({
  list,
  handleRemoveAnnouncement,
  removeSimilar,
}) => {
  const dateFormat = require("dateformat");

  const { id } = useParams();

  const history = useHistory();

  const findAnnouncement = list.find((item) => item.id === id);

  const similarAnn = similar(list, findAnnouncement, 3);
  console.log(similarAnn);

  const similarArr = similarAnn.filter(
    (annoncement) =>
      annoncement.title !== findAnnouncement.title &&
      annoncement.description !== findAnnouncement.description
  );

  return (
    <div>
      <div className={s.findAnnouncement}>
        <h2 className={s.title}>{findAnnouncement.title}</h2>
        <p className={s.description}>{findAnnouncement.description}</p>
        <span className={s.date}>
          {dateFormat(findAnnouncement.date, "ddd mmm dd yyyy HH:MM:ss")}
        </span>

        <div className={s.buttonsContainer}>
          <Link to={`${routes.edit}/${findAnnouncement.id}`}>
            <button className={s.edit}>Edit</button>
          </Link>
          <button
            onClick={() =>
              handleRemoveAnnouncement(findAnnouncement.id, history)
            }
            className={s.delete}
          >
            Delete
          </button>
        </div>
      </div>

      <div className={s.similar}>
        <h2>Similar Announcements:</h2>
        {similarArr.length === 0 ? (
          <div className={s.noSimilar}>No similiar annoncement</div>
        ) : (
          similarArr.map((annoncement) => (
            <Announcement
              id={annoncement.id}
              key={annoncement.id}
              title={annoncement.title}
              description={annoncement.description}
              date={annoncement.date}
              deleteAnnouncement={removeSimilar}
            />
          ))
        )}
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  removeAnnouncement: announcementsOperations.actions.removeAnnouncement,
};

const mapStateToProps = (state) => ({
  list: state.announcements.allList.announcements,
});

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withState(),
  withHandlers({
    handleRemoveAnnouncement: (props) => (id, history) => {
      console.log(id);
      props.removeAnnouncement(id);
      history.push("/");
    },
    removeSimilar: (props) => (id) => {
      props.removeAnnouncement(id);
    },
  })
);

export default enhancer(DetailAnnouncement);
