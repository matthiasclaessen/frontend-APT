import { LOAD_MOVIES_SUCCESS } from '../actions/movies';

const movies = (movies = [], action) => {
    switch (action.type) {
            case LOAD_MOVIES_SUCCESS:
            return action.movies;
        default:
            return movies;
    }
};

export default movies;