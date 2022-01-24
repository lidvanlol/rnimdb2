import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  hasErrors: false,
  shows: [],
};

// A slice for shows with our three reducers
const showsSlice = createSlice({
  name: "shows",
  initialState,
  reducers: {
    getShows: (state) => {
      state.loading = true;
    },
    getShowsSuccess: (state, { payload }) => {
      state.shows = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getShowsFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

// Three actions generated from the slice
export const { getShows, getShowsSuccess, getShowsFailure } =
  showsSlice.actions;

// A selector
export const showsSelector = (state) => state.shows;

// The reducer
export default showsSlice.reducer;

// Asynchronous thunk action
export function fetchShows() {
  return async (dispatch) => {
    dispatch(getShows());

    try {
      const response = await fetch(
        "https://imdb-api.com/en/API/Top250TVs/k_62zitc87"
      );
      const data = await response.json();

      dispatch(getShowsSuccess(data.items));
    } catch (error) {
      dispatch(getShowsFailure());
    }
  };
}
