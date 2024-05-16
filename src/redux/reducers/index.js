import { combineReducers } from "redux";

import authReducers from "./authReducers";
import duesReducers from "./duesReducers";
import transactionReducers from "./transactionReducers";
import latterReducers from "./latterReducers";
import userReducers from "./userReducers";

export default combineReducers({
  auth: authReducers,
  dues: duesReducers,
  transaction: transactionReducers,
  latter: latterReducers,
  user: userReducers,
});
