import { useReducer } from "react";

const ACTIONS = {
  UPDATE_KEYWORD: "update_keyword",
  UPDATE_RATING: "update_rating",
};

export default function useForm({
  initialKeyword = "",
  initialRating = "g",
} = {}) {
  const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.UPDATE_KEYWORD:
        return { ...state, keyword: action.payload };
      case ACTIONS.UPDATE_RATING:
        return { ...state, rating: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    keyword: decodeURIComponent(initialKeyword),
    rating: initialRating,
  });
  const { keyword, rating } = state;
  return {
    keyword,
    rating,
    updateKeyword: (keyword) =>
      dispatch({
        type: ACTIONS.UPDATE_KEYWORD,
        payload: keyword,
      }),
    updateRating: (rating) =>
      dispatch({
        type: ACTIONS.UPDATE_RATING,
        payload: rating,
      }),
  };
}
