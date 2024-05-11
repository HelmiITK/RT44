import { combineReducers } from "redux";

import authReducers from "./authReducers";
import duesReducers from "./duesReducers";
import transactionReducers from "./transactionReducers";

export default combineReducers({
  auth: authReducers,
  dues: duesReducers,
  transaction: transactionReducers,
});
