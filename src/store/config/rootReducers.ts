import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "features/user/slices/userSlice";

const rootReducer = combineReducers({
  userState: userReducer,
});

export default rootReducer;
