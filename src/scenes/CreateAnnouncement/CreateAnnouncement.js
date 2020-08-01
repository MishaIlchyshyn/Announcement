import React from "react";
import s from "./CreateAnnouncement.module.scss";
import { useFormik } from "formik";
import Input from "../../components/Input/Input";

const CreateAnnouncement = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
  });

  const onSubmit = (value) => {
    console.log(value);
  };

  //   console.log(formik.values);

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
        <button className={s.create} onClick={() => onSubmit(formik.values)}>
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateAnnouncement;
