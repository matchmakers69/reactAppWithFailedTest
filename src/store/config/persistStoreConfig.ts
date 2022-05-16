import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import rootReducer from "./rootReducers";

const persistConfig = {
  key: "root",
  storage,
  blacklist: [""],
  whitelist: [""],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
