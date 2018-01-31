import React from 'react';
import {connect} from 'react-redux';
import { Dialog, RefreshIndicator } from 'material-ui';
import _ from 'lodash';
import { closeMovieModal } from './movie-modal.actions';
import { getMovieDetails } from '../movie-browser.actions';
import * as movieHelpers from '../movie-browser.helpers';

class MovieModalComponent extends React.Component {
  componentWillReceiveProps(nextProps) {
    // If we received a new Id
    if (nextProps.movieId && this.props.movieId !== nextProps.movieId) {
      nextProps.getMovieDetails(nextProps.movieId);
    }
  }

  render() {
    const {isOpen, closeMovieModal} = this.props;
    const loadingStatus = this.props.isLoading ? 'loading' : 'hide';
    const movie = movieHelpers.updateMoviePictureUrls(this.props.movie);

    return (
      <Dialog
        title={movie.title}
        modal={false}
        open={isOpen}
        onRequestClose={closeMovieModal}
      >
        <img src={movie.backdrop_path} />
        <RefreshIndicator
          style={{position: 'relative', display: 'block', margin: '0 auto'}}
          top={0}
          left={0}
          size={80}
          status={loadingStatus} />
        Only actions can close this dialog.
    </Dialog>
    );
  }
}
// "connect" our movie modal to the component store
export default connect(
  // Map nodes in our state to a properties of our component
  (state) => ({
    // Using lodash get, recursively check that a property is defined
    // before try to access it - if it is undefined, it will return your default value
    // _.get(object, 'path.to.objects[0].and.stuff', defaultValue)
    isOpen: _.get(state, 'movieBrowser.movieModal.isOpen', false),
    movieId: _.get(state, 'movieBrowser.movieModal.movieId'),
    movie: _.get(state, 'movieBrowser.movieDetails.response', {}),
    isLoading: _.get(state, 'movieBrowser.movieDetails.isLoading', false),
  }),
  // Map to a prop, ready to be dispatched
  { closeMovieModal, getMovieDetails }
)(MovieModalComponent);
