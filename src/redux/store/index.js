import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { peopleReducer } from "../reducers/peopleReducer";
import { profileReducer } from "../reducers/profileReducer";

const mainReducer = combineReducers({
  profile: profileReducer,
  people: peopleReducer,
});

export const store = configureStore({
  reducer: mainReducer,
});
