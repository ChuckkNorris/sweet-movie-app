import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

// import DevTools from './modules/common/dev-tools.component';
import thunkMiddlware from 'redux-thunk';
import { createLogger } from 'redux-logger'

const rootReducer = combineReducers({
  
});

const loggerMiddleware = createLogger();

const store = createStore(
  // The root reducer will serve as the parent for all other reducers
  rootReducer,
  // The initial state (will be populated by the initial state of our other reducers so it can be undefined)
  undefined,
  // compose simply enables us to apply several store enhancers
  // Right now, we are only using applyMiddlware, but this could change in the future
  compose(
    applyMiddleware(
      // Thunk allows functions to be returned from action creators
      // so we can do things like dispatch multiple actions in a 
      // single action creator for async actions
      thunkMiddlware,
      // Will log information about dispatched actions to the console
      // including the previous state, the action details, and the next state
      loggerMiddleware
    )
    // DevTools.instrument()
  )
);

export default store;
