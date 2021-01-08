import React from 'react';
import MovieList from './movies_list';

const Movies = ({ movies }) => {
    return (
        <div className="movies">
            <MovieList movies={movies} />
        </div>
    );
}

export default Movies;