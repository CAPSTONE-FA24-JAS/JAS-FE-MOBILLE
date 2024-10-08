import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

export const useAppDispatch = () => useDispatch<AppDispatch>();
