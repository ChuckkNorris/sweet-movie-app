import React from 'react';
import {Row, Col} from 'react-bootstrap';
import MovieCard from '../movie-card/movie-card.component';

const MovieListComponent = ({movies}) => {
  if (movies && movies.length > 0) {
    const movieColumns = movies.map(movie => (
      <Col key={movie.id} xs={12} sm={4} md={3} lg={3}>
        <MovieCard movie={movie} />
      </Col>
    ));
    return (
      <Row>
        {movieColumns}
      </Row>
    );
  } else {
    return (
      <Row>
        <Col xs={12}>
          <h4 style={{textAlign: 'center'}}>Movie Title</h4>
        </Col>
      </Row>
    );
  }  
}

export default MovieListComponent;
