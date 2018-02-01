import React from 'react';
import {Row, Col} from 'react-bootstrap';
import MovieCard from '../movie-card/movie-card.component';
import LoaderComponent from '../../common/loader.component';

const styles = {
  movieColumn: {
    marginBottom: 20
  }
}

const MovieListComponent = ({movies, isLoading}) => {
  const movieColumns = movies ? movies.map(movie => (
    <Col style={styles.movieColumn} key={movie.id} xs={12} sm={4} md={3} lg={3}>
      <MovieCard movie={movie} />
    </Col>
  )) : null;
  return (
    <Row>
      {movieColumns}
      <LoaderComponent isLoading={isLoading} />
    </Row>
  );
 
  // if (movies && movies.length > 0) {
  //   // Create a collection of movie columns/cards
   
  //   return (
  //     <Row>
  //       {movieColumns}
  //     </Row>
  //   );
  // } else {
  //   // Placeholder message if there aren't any movies
  //   return (
  //     <Row>
  //       <Col xs={12}>
  //         <h4 style={{textAlign: 'center'}}>No Movies :(</h4>
  //       </Col>
  //     </Row>
  //   );
  // }  
}

export default MovieListComponent;
