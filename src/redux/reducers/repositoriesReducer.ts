// interface to describe the state 
interface RepositoriesState {
    loading: boolean;
    error: string | null;
    data: string[];
}

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
type Action =
    | SearchRepositoriesAction
    | SearchRepositoriesSuccess 
    | SearchRepositoriesError;

// enum to hold action type strings so we can use in reducer and other interfaces
enum ActionType {
    SEARCH_REPOSITORIES ='search_repositories',
    SEARCH_REPOSITORIES_SUCCESS = 'search_repositories_success',
    SEARCH_REPOSITORIES_ERROR = 'search_repositories_error'
}

const reducer = (state: RepositoriesState, action: Action ): RepositoriesState => {
    switch (action.type) {
        case ActionType.SEARCH_REPOSITORIES:
            return { loading: true, error: null, data: [] }
        case ActionType.SEARCH_REPOSITORIES_SUCCESS:
            return { loading: false, error: null, data: action.payload }
        case ActionType.SEARCH_REPOSITORIES_ERROR:
            return { loading: false, error: action.payload, data: [] }

        default:
            return state;
    }
}

export default reducer;