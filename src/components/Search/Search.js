import React, { useState } from "react";
import s from "./Search.module.scss";
import { useHistory } from "react-router-dom";
import Input from "../Input/Input";

const Search = ({ handleSearchAnnouncement }) => {
  const [inputSearch, setInputSearch] = useState("");

  const history = useHistory();

  const onChange = (e) => {
    let value = e.target.value;
    setInputSearch(value);
  };

  return (
    <div className={s.searchBlock}>
      <Input
        className={s.input}
        placeholder="Search..."
        id="title"
        name="title"
        onChange={(e) => onChange(e)}
      />
      <button
        className={s.btnSearch}
        onClick={() => handleSearchAnnouncement(inputSearch, history)}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
