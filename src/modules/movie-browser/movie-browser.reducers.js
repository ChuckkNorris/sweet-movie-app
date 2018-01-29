import {combineReducers} from 'redux';
import { createReducer, createAsyncReducer } from '../common/redux.helpers';
import { keys as movieActionKeys } from './movie-browser.actions';

// Placeholder reducer for our movie modal
const movieModalReducer = createReducer({ isOpen: false }, {

});

const createMovieRequestSuccessReducer = (actionType) => ({
  [`${actionType}`]: () => {

  }
});

// movieBrowser module reducer
const movieBrowserReducer = combineReducers({
  movieModal: movieModalReducer,
  topMovies: createAsyncReducer(movieActionKeys.GET_TOP_MOVIES, {
    ['GET_TOP_MOVIES_SUCCESS']: (state, action) => {
      const existingMovies = state.movieBrowser.topMovies.response.results || [];
      return {
        ...state,
        isLoading: false,
        response: {
          ...action.response,
          results: [
            ...existingMovies,
            ...action.response.results
          ]
        }
      }
    }
  }),
  movieSearch: createAsyncReducer(movieActionKeys.SEARCH_MOVIES),
  movieDetails: createAsyncReducer(movieActionKeys.GET_MOVIE_DETAILS)
});

export default movieBrowserReducer;
