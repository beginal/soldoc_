import { configureStore, combineReducers } from '@reduxjs/toolkit';
import soldocReducer from './soldocReducer';


const rootReducer = combineReducers({
  soldocReducer,
})


const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production"
});

export default store;