import { configureStore } from '@reduxjs/toolkit';
import authReducer from "./slices/authSlice";
import appReducer from "./slices/appSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    app: appReducer,
  },
});

export default store;
