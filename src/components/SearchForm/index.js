import React from "react";
import css from "./SearchForm.module.css";
import { useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import useForm from "./hooks";

const RATINGS = ["g", "pg", "pg-13", "r"];

export default function SearchForm({
  initialKeyword = "",
  initialRating = "g",
}) {
  let history = useHistory();

  const { keyword, rating, updateKeyword, updateRating } = useForm({
    initialKeyword,
    initialRating,
  });

  const handleChange = (evt) => {
    updateKeyword(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    history.push(`/search/${keyword}/${rating}`);
  };
  const handleChangeRatings = (evt) => {
    updateRating(evt.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className={css["c-search"]}>
      <button className={css["c-search-btn"]}>
        <SearchIcon />
      </button>
      <input
        required
        className={css["c-search-input"]}
        placeholder="Busca un Gif Aquí..."
        onChange={handleChange}
        type="text"
        value={keyword}
      />
      <select
        className={css["c-search-select"]}
        value={rating}
        onChange={handleChangeRatings}
      >
        <option disabled>Rating</option>
        {RATINGS.map((rating) => (
          <option key={rating}>{rating}</option>
        ))}
      </select>
    </form>
  );
}
