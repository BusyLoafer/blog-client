import {combineReducers} from "redux";
import articles from './articles';
import contacts from './contacts';
import calendar from './calendar';

const rootState = combineReducers({
  ...articles,
  ...contacts,
  ...calendar,
});

const rootReducer = (state: any, action: any) => {
	return rootState(state, action)
}

export type IRootState = ReturnType<typeof rootReducer>;

export default rootReducer;