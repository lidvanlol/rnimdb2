import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  hasErrors: false,
  movies: [],
};

// A slice for movies with our three reducers
const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    getMovies: (state) => {
      state.loading = true;
    },
    getMoviesSuccess: (state, { payload }) => {
      state.movies = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getMoviesFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

// Three actions generated from the slice
export const { getMovies, getMoviesSuccess, getMoviesFailure } =
  moviesSlice.actions;

// A selector
export const moviesSelector = (state) => state.movies;

// The reducer
export default moviesSlice.reducer;

// Asynchronous thunk action
export function fetchMovies() {
  return async (dispatch) => {
    dispatch(getMovies());

    try {
      const response = await fetch(
        "https://imdb-api.com/en/API/Top250Movies/k_62zitc87"
      );
      const data = await response.json();

      dispatch(getMoviesSuccess(data.items));
    } catch (error) {
      dispatch(getMoviesFailure());
    }
  };
}
