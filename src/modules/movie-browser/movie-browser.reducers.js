import {combineReducers} from 'redux';
import { createReducer, createAsyncReducer } from '../common/redux.helpers';
import { keys as movieActionKeys } from './movie-browser.actions';

// Placeholder reducer for our movie modal
const movieModalReducer = createReducer({ isOpen: false }, {

});

// movieBrowser module reducer
const movieBrowserReducer = combineReducers({
  movieModal: movieModalReducer,
  topMovies: createAsyncReducer(movieActionKeys.GET_TOP_MOVIES),
  movieSearch: createAsyncReducer(movieActionKeys.SEARCH_MOVIES),
  movieDetails: createAsyncReducer(movieActionKeys.GET_MOVIE_DETAILS)
});

export default movieBrowserReducer;
