import { configureStore } from "@reduxjs/toolkit";
import todoSliceReducer from "../slices/slice";

export const store = configureStore({
  reducer: todoSliceReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
