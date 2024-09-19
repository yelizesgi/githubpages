import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import stockSlice from "../features/stockSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    stock: stockSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});
export default store;
