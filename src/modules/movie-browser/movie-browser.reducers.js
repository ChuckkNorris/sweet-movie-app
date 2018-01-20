import {combineReducers} from 'redux';
import { createReducer } from '../common/redux.helpers';

const movieModalReducer = createReducer({ isOpen: false }, {

});

const movieBrowserReducer = combineReducers({
  movieModal: movieModalReducer
});

export default movieBrowserReducer;
