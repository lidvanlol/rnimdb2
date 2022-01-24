import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    user: null,
    error: null,
  },
  reducers: {
    storeToken: (state, {payload}) => {
      state.token = payload;
    },

    storeUser: (state, {payload}) => {
      state.user = payload;
    },

    storeError: (state, {payload}) => {
      state.error = payload;
    },
  },
});

export const {storeToken, storeUser, storeError} = authSlice.actions;

export default authSlice.reducer;
