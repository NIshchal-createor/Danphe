import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./Features/adminSlice";


export const Store = configureStore({
  reducer: {
    admin: adminReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type RootState = ReturnType<typeof Store.getState>;

export type AppDispatch = typeof Store.dispatch;