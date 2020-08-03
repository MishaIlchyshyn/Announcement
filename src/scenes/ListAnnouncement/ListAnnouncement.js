import React from "react";
import { compose, withState, withHandlers } from "recompose";
import { connect } from "react-redux";

import s from "./ListAnnouncement.module.scss";
import Announcement from "../../components/Announcement/Announcement";
import { Link } from "react-router-dom";

const ListAnnouncement = ({ list }) => {
  return (
    <div>
      {list.length === 0 ? (
        <div className={s.emptyList}>
          Not data. <Link to="/create">Create</Link> a new announcement
        </div>
      ) : (
        list.map((annoncement) => {
          return (
            <Announcement
              title={annoncement.title}
              description={annoncement.description}
              date={annoncement.createDate}
            />
          );
        })
      )}
    </div>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = (state) => ({
  list: state.announcements.announcements,
});

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withState(),
  withHandlers({
    handleAddAnnouncement: (props) => (data) => {
      props.addAnnouncement(data);
    },
  })
);

export default enhancer(ListAnnouncement);
