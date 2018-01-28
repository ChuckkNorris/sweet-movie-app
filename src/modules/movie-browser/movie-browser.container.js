import React from 'react';
import {connect} from 'react-redux';
import {Grid, Row, Col} from 'react-bootstrap';
import {AppBar} from 'material-ui';

import {getTopMovies} from './movie-browser.actions';
import * as movieHelpers from './movie-browser.helpers';
// import MovieCard from './movie-card/movie-card.component';
import MovieList from './movie-list/movie-list.component';

class MovieBrowser extends React.Component {

  componentDidMount() {
    this.props.getTopMovies(2);
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
            {/* {movies ? 
              movies.map(movie => (
                <Col key={movie.id} xs={12} sm={6} md={4} lg={3}>
                  <MovieCardComponent movie={movie} />
                </Col>
              )) : 
              null } */}
            <p>Movie list will go here</p>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    topMovies: state.movieBrowser.topMovies
  }),
  { getTopMovies }
)(MovieBrowser);
