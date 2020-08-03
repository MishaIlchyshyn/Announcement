import React from "react";
import s from "./CreateAnnouncement.module.scss";
import { useFormik } from "formik";
import { connect } from "react-redux";
import Input from "../../components/Input/Input";
import { compose, withState, withHandlers } from "recompose";
import * as announcementsOperations from "../../modules/announcements/announcementsOperations";

const CreateAnnouncement = ({ handleAddAnnouncement, list }) => {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
  });

  console.log(list);

  return (
    <div className={s.Create}>
      <h2 className={s.title}>Create Announcement</h2>

      <div className={s.containerInput}>
        <label className={s.label}>
          Title
          <Input
            className={s.input}
            name="title"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
        </label>
      </div>

      <div className={s.containerInput}>
        <label className={s.label}>
          Description
          <textarea
            className={s.textarea}
            name="description"
            onChange={formik.handleChange}
            value={formik.values.description}
          ></textarea>
        </label>
      </div>

      <div className={s.containerInput}>
        <button
          className={s.create}
          onClick={() => handleAddAnnouncement(formik.values)}
        >
          Create
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  addAnnouncement: announcementsOperations.actions.addAnnouncement,
};

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

export default enhancer(CreateAnnouncement);
