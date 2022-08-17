import {combineReducers} from "redux";
import articles from './articles';

const appReducer = combineReducers({
  ...articles
});

const rootReducer = (state: any, action: any) => {
	return appReducer(state, action)
}

export default rootReducer;