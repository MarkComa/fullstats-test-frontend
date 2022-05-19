import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./auth/auth.api";
import authSlice from "./reducers/authSlice";

export const store = configureStore({
  reducer:{[authApi.reducerPath]: authApi.reducer,
  auth: authSlice},
  
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(authApi.middleware)
})