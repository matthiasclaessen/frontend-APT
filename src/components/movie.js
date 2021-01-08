import React from 'react';


const Movie = ({ movie }) => {
    return (
        <div className="movie__container">
            <div className="movie">
                <div className="movie__info">
                    <h2>{movie.title}</h2>
                    <p>{movie.year}</p>
                </div>
                <div className="movie__rating">
                    <p>{movie.rating.toFixed(1)}</p>
                </div>
            </div> 
        </div>
    );
}

export default Movie;