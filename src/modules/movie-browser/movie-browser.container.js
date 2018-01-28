import React from 'react';
import {connect} from 'react-redux';
import {Grid, Row, Col} from 'react-bootstrap';
import {AppBar} from 'material-ui';
import {getTopMovies} from './movie-browser.actions';
class MovieBrowser extends React.Component {

  componentDidMount() {
    this.props.getTopMovies(2);
  }

  render() {
    return (
      <div>
        <AppBar title='Movie Browser' />
        <Grid>
          <Row>
            <p>Search will go here</p>
          </Row>
          <Row>
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
