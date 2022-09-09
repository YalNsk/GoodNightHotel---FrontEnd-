import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer/authReducer";

const store = configureStore({
  reducer: { auth: authReducer },
  devTools: true, //pour windows -> process.env.NODE_ENV !== "production" -> vrai ou faux
});

export default store;
