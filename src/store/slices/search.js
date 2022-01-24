 import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  hasErrors: false,
  results: [],
};

// A slice for results with our three reducers
const resultsSlice = createSlice({
  name: "results",
  initialState,
  reducers: {
    getResults: (state) => {
      state.loading = true;
    },
    getResultsSuccess: (state, { payload }) => {
      state.results = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getResultsFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

// Three actions generated from the slice
export const { getResults, getResultsSuccess, getResultsFailure } =
  resultsSlice.actions;

// A selector
export const resultsSelector = (state) => state.results;

// The reducer
export default resultsSlice.reducer;

// Asynchronous thunk action
export function fetchResults() {
  return async (dispatch) => {
    dispatch(getResults());

    try {
      const response = await fetch(
        "imdb-api.com/en/API/SearchMovie/k_5ll42g7p/"
      );
      const data = await response.json();

      dispatch(getResultsSuccess(data.results));
    } catch (error) {
      dispatch(getResultsFailure());
    }
  };
}



