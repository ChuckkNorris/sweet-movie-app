import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

// import DevTools from './modules/common/dev-tools.component';
import thunkMiddlware from 'redux-thunk';
import { createLogger } from 'redux-logger'

const rootReducer = combineReducers({
  
});

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  undefined,
  compose(
    applyMiddleware(
      thunkMiddlware,
      loggerMiddleware
    )
    // DevTools.instrument()
  )
);

export default store;
