import React from "react";
import { compose, withState, withHandlers } from "recompose";
import { connect } from "react-redux";
import Announcement from "../../components/Announcement/Announcement";
import s from "./FoundAnnouncements.module.scss";

const FoundAnnouncements = ({ found }) => {
  console.log(found);
  return (
    <div>
      {found.length === 0 ? (
        <div className={s.emptyList}>Not found data</div>
      ) : (
        found.map((annoncement) => {
          return (
            <Announcement
              id={annoncement.id}
              key={annoncement.id}
              title={annoncement.title}
              description={annoncement.description}
              date={annoncement.date}
            />
          );
        })
      )}
    </div>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = (state) => ({
  found: state.announcements.found.announcements,
});

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withState(),
  withHandlers({})
);

export default enhancer(FoundAnnouncements);
