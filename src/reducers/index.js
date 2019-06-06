import { combineReducers } from "redux";
import UserReducer from "./reducer_user";
import ActiveUserReducer from "./reducer_activeUser";
const RootReducer = combineReducers({
  users: UserReducer,
  activeUser: ActiveUserReducer
});

export default RootReducer;
