// Helper function to enables passing an object with
// the action.type as the key and the reducer function as the value
export const createReducer = (initialState = {}, actionHandlerKeyFuncs = {}) => {
  return (state = initialState, action) => {
    const actionHandler = actionHandlerKeyFuncs[action.type];
    return actionHandler ? actionHandler(state, action) : state;
  }
};

// Creates a basic action
export const createAction = (type, actionProps) => {
  return {
    type,
    ...actionProps
  };
}

// e.g. createAsyncActionCreator('GET_TOP_MOVIES', getTopMovies, {page: 1})
// I admit that passing the asyncRequestFn without params is not ideal, but 
// wanted to capture the requestParams as part of the start action for logging transparency
export const createAsyncActionCreator = (actionType, asyncRequestFn, requestParams) => {
  return (dispatch) => {
    dispatch(createAction(`${actionType}_START`, {request: requestParams}));
    // NOTE: asyncRequestFn must accept single object parameter
    // in order to resolve param values
    return asyncRequestFn(requestParams)
      .then(response => {
        response.json()
          .then(json => dispatch(createAction(`${actionType}_SUCCESS`, { response: json })))
          .catch(error => dispatch(createAction(`${actionType}_ERROR`, { error })));
      });
      
  };
}

// We're setting these based on the state of the request
const initialAsyncState = { isLoading: false, response: undefined, request: undefined };

// Generic way of handling state changes for an async request
// Allowable async reducer overrides are: {action_type}_START, {action_type}_SUCCESS, {action_type}_ERROR
export const createAsyncReducer = (actionType, actionHandlerKeyFuncs = {}, initialState = initialAsyncState) => {
  const startReducerOverrideFn = actionHandlerKeyFuncs[`${actionType}_START`];
  const startReducerFn = (state, action) => ({
      ...state,
      isLoading: true,
      request: action.request
  });
  const successReducerOverrideFn = actionHandlerKeyFuncs[`${actionType}_SUCCESS`];
  const successReducerFn = successReducerOverrideFn ? successReducerOverrideFn : (state, action) => ({
      ...state,
      isLoading: false,
      response: action.response
  });
  const errorReducerOverrideFn = actionHandlerKeyFuncs[`${actionType}_ERROR`];
  const errorReducerFn = (state, action) => ({
      ...state,
      isLoading: false,
      error: action.error
  });

  return createReducer(
    initialState,
    {
      [`${actionType}_START`]: startReducerFn,
      [`${actionType}_SUCCESS`]: successReducerFn,
      [`${actionType}_ERROR`]: errorReducerFn
    }
  );
}
