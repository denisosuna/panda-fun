import React, { useState } from "react";
import css from "./SearchForm.module.css";
import { useHistory } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
const RATINGS = ["g", "pg", "pg-13", "r"];

export default function SearchForm({ initialKeyword = "", initialRating }) {
  const [keyword, setKeyword] = useState(decodeURIComponent(initialKeyword));
  const [rating, setRating] = useState(initialRating);
  let history = useHistory();

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    history.push(`/search/${keyword}/${rating}`);
  };
  const handleChangeRatings = (evt) => {
    setRating(evt.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className={css["c-search"]}>
      <button className={css["c-search-btn"]}><SearchIcon/></button>
      <input
        className={css["c-search-input"]}
        placeholder="Busca un Gif Aquí..."
        onChange={handleChange}
        type="text"
        value={keyword}
      />
      <select className={css["c-search-select"]} value={rating} onChange={handleChangeRatings}>
        <option disabled>Rating Type</option>
        {RATINGS.map((rating) => (
          <option key={rating}>{rating}</option>
        ))}
      </select>
    </form>
  );
}
