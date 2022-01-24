import {persistReducer} from 'redux-persist';
import {combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

import authReducer from './slices/auth.slice';
import moviesReducer from './slices/movies'
import showsReducer from './slices/shows'
import searchReducer from './slices/search'

const rootPersistConfig = {
  version: 1,
  key: 'root',
  storage: AsyncStorage,
};

const reducers = combineReducers({
  auth: authReducer,
  movies: moviesReducer,
  shows: showsReducer,
  search:searchReducer
 
});

const rootReducer = persistReducer(rootPersistConfig, reducers);

export default rootReducer;
