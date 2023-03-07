import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import { friendsReducer } from "../reducers/friendsReducer";
import { peopleReducer } from "../reducers/peopleReducer";
import { profileReducer } from "../reducers/profileReducer";

const persistConfig = {
  key: "root",
  storage,
};

const mainReducer = combineReducers({
  profile: profileReducer,
  people: peopleReducer,
  friends: friendsReducer,
});

const persistedReducer = persistReducer(persistConfig, mainReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
