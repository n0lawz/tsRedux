import { ActionType } from '../action-types';
// these are the seperate interfaces that describe each potential action
interface SearchRepositoriesAction {
    type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccess {
    type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
    payload: string[];
}

interface SearchRepositoriesError {
    type: ActionType.SEARCH_REPOSITORIES_ERROR,
    payload: string;
}

// type to pass into our reducer to describe our Actions
export type Action =
    | SearchRepositoriesAction
    | SearchRepositoriesSuccess 
    | SearchRepositoriesError;