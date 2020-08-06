import React from "react";
import s from "./EditAnnouncement.module.scss";
import { useFormik } from "formik";
import { connect } from "react-redux";
import Input from "../../components/Input/Input";
import { compose, withState, withHandlers } from "recompose";
import * as announcementsOperations from "../../modules/announcements/announcementsOperations";
import { useHistory, useParams } from "react-router-dom";

const EditAnnouncement = ({ list, handleEditAnnouncement }) => {
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

  const { id } = useParams();
  const findAnnouncement = list.find((item) => item.id === id);

  const formik = useFormik({
    initialValues: {
      title: findAnnouncement.title,
      description: findAnnouncement.description,
      id: findAnnouncement.id,
    },
    validate,
  });

  console.log(list);

  return (
    <div className={s.Edit}>
      <h2 className={s.title}>Edit Announcement</h2>

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
          className={s.edit}
          disabled={!(formik.isValid && formik.dirty)}
          onClick={() => handleEditAnnouncement(formik.values, history)}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  editAnnouncement: announcementsOperations.actions.editAnnouncement,
};

const mapStateToProps = (state) => ({
  list: state.announcements.allList.announcements,
});

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withState(),
  withHandlers({
    handleEditAnnouncement: (props) => (data, history) => {
      data.date = new Date();
      props.editAnnouncement(data);
      history.push("/");
    },
  })
);

export default enhancer(EditAnnouncement);
