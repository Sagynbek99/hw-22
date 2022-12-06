import { combineReducers } from "redux";
import personsReducer from "./persons";

const rootReducer = combineReducers({
  person: personsReducer,
});
export default rootReducer;
