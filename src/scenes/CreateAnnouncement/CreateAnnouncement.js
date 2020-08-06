import React from "react";
import s from "./CreateAnnouncement.module.scss";
import { useFormik } from "formik";
import { connect } from "react-redux";
import Input from "../../components/Input/Input";
import { v4 as uuidv4 } from "uuid";
import { compose, withState, withHandlers } from "recompose";
import * as announcementsOperations from "../../modules/announcements/announcementsOperations";
import { useHistory } from "react-router-dom";

const CreateAnnouncement = ({ handleAddAnnouncement, list }) => {
  const validate = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = "Required";
    } else if (values.title.length < 3) {
      errors.title = "must be at least 3 characters long";
    }

    if (!values.description) {
      errors.description = "Required";
    } else if (values.description.length < 10) {
      errors.description = "must be at least 3 characters long";
    }

    return errors;
  };

  const history = useHistory();
  console.log(history);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      id: "",
    },
    validate,
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
            id="title"
            name="title"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.title}
          />
        </label>
        {formik.touched.title && formik.errors.title ? (
          <div className={s.errors}>{formik.errors.title}</div>
        ) : null}
      </div>

      <div className={s.containerInput}>
        <label className={s.label}>
          Description
          <textarea
            className={s.textarea}
            id="description"
            name="description"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.description}
          ></textarea>
        </label>
        {formik.errors.description && formik.touched.description ? (
          <div className={s.errors}>{formik.errors.description}</div>
        ) : null}
      </div>

      <div className={s.containerInput}>
        <button
          className={s.create}
          disabled={!(formik.isValid && formik.dirty)}
          onClick={() => handleAddAnnouncement(formik.values, history)}
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
    handleAddAnnouncement: (props) => (data, history) => {
      data.id = uuidv4();
      data.date = new Date();
      props.addAnnouncement(data);
      history.push("/");
    },
  })
);

export default enhancer(CreateAnnouncement);
