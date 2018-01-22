// Helper function to enables passing an object with
// the action.type as the key and the reducer function as the value
export const createReducer = (initialState = {}, actionHandlerKeyFuncs = {}) => {
  return (state = initialState, action) => {
    const actionHandler = actionHandlerKeyFuncs[action.type];
    return actionHandler ? actionHandler(state, action) : state;
  }
};

const createAction = (name, params) => {
  return {
    type: name,
    ...params
  };
}

export const createAsyncAction = (name, asyncRequest, params) => {
  return (dispatch) => {
    dispatch(createAction(`${name}_START`, params));
    return asyncRequest(params)
      .then(response => dispatch(createAction(`${name}_SUCCESS`, { response })))
      .catch(error => dispatch(createAction(`${name}_ERROR`, { error })));
  };
}
