import { combineReducers } from "redux";
import repositoriesReducer from '../reducers/repositoriesReducer';

const reducers = combineReducers({
    repositories: repositoriesReducer
});

export default reducers;

// this is essentially saying give us back what type the reducers function returns, and assign it to RootState
export type RootState = ReturnType<typeof reducers>;