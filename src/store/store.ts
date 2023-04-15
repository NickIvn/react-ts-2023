import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "../service/movieApi";
import formReducer from "./reducer/formSlice";
import searchReducer from "./reducer/searchSlice";

const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    form: formReducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
