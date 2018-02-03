// List of movie modal action type keys
export const keys = {
  'OPEN_MOVIE_MODAL': 'OPEN_MOVIE_MODAL',
  'CLOSE_MOVIE_MODAL': 'CLOSE_MOVIE_MODAL',
}

// Opens the <MovieModal /> with a movieId
export const openMovieModal = (movieId) => {
  return {
    type: keys.OPEN_MOVIE_MODAL,
    movieId
  };
}

// Closes the <MovieModal />
export const closeMovieModal = () => {
  return {
    type: keys.CLOSE_MOVIE_MODAL
  };
}
