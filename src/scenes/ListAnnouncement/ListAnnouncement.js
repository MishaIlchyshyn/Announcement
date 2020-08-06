import React from "react";
import { compose, withState, withHandlers } from "recompose";
import { connect } from "react-redux";

import s from "./ListAnnouncement.module.scss";
import Announcement from "../../components/Announcement/Announcement";
import { Link } from "react-router-dom";
import { routes } from "../../routes";
import * as announcementsOperations from "../../modules/announcements/announcementsOperations";

const ListAnnouncement = ({ list, handleRemoveAnnouncement, state }) => {
  console.log(state);
  return (
    <div>
      {list.length === 0 ? (
        <div className={s.emptyList}>
          Not data. <Link to={routes.create}>Create</Link> a new announcement
        </div>
      ) : (
        list.map((annoncement) => {
          return (
            <Announcement
              id={annoncement.id}
              key={annoncement.id}
              title={annoncement.title}
              description={annoncement.description}
              date={annoncement.date}
              deleteAnnouncement={handleRemoveAnnouncement}
            />
          );
        })
      )}
    </div>
  );
};

const mapDispatchToProps = {
  removeAnnouncement: announcementsOperations.actions.removeAnnouncement,
};

const mapStateToProps = (state) => ({
  state,
  list: state.announcements.allList.announcements,
});

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withState(),
  withHandlers({
    handleRemoveAnnouncement: (props) => (id) => {
      console.log(id);
      props.removeAnnouncement(id);
    },
  })
);

export default enhancer(ListAnnouncement);
