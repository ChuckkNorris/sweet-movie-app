import React from 'react';
import {connect} from 'react-redux';
import {Grid, Row, Col} from 'react-bootstrap';
import {AppBar} from 'material-ui';
import * as movieActions from './movie-browser.actions';
import * as movieHelpers from './movie-browser.helpers';
import MovieList from './movie-list/movie-list.component';
import * as scrollHelpers from '../common/scroll.helpers';

class MovieBrowser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1
    };
    // Binds the handleScroll to this class (MovieBrowser)
    // which provides access to MovieBrowser's props
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.onscroll = this.handleScroll;
    this.props.getTopMovies(this.currentPage);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const {topMovies} = this.props;
    if (!topMovies.isLoading) {
      let percentageScrolled = scrollHelpers.getPercentageScrolledDown(window);
      if (percentageScrolled > .8) {
        const nextPage = this.state.currentPage + 1;
        this.props.getTopMovies(nextPage);
        this.setState({currentPage: nextPage});
      }
    }
  }

  render() {
    const movies = movieHelpers.getMoviesList(this.props.topMovies.response);

    return (
      <div>
        <AppBar title='Movie Browser' />
        <Grid>
          <Row>
            <p>Search will go here</p>
          </Row>
          <Row>
            <MovieList movies={movies} />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default connect(
  // Map nodes in our state to a properties of our component
  (state) => ({
    topMovies: state.movieBrowser.topMovies
  }),
  // Map action creators to properties of our component
  { ...movieActions }
)(MovieBrowser);
