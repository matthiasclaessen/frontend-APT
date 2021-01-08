import React from 'react';

import Movie from './movie';


const MoviesList = ({ movies }) => {
    const output = movies.slice(0, 9).map((movie, i) => {
        return (
            <div key={i}>
                <Movie movie={movie} />
            </div>
        );
    });


    return (
        <div className="movies__list">
            {output}
        </div>
    );
};


export default MoviesList;