import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage/session"
import authReducer from "../features/authSlice"

const persistConfig = {
    key: "root",
    storage,
}

const persistedReducer = persistReducer(persistConfig, authReducer)

const store = configureStore({
    reducer: {
      auth: persistedReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: getDefaultMiddleware({
      serializableCheck: false,
    }),
  })
  
export const persistor = persistStore(store)
export default store