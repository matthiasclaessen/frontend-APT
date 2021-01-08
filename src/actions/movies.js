import MoviesApi from '../apis/movies_api';

/* Action Types */
export const LOAD_MOVIES_SUCCESS = 'LOAD_MOVIES_SUCCESS';
export const LOAD_MOVIES_WITH_REVIEWS_SUCCESS = 'LOAD_MOVIES_WITH_REVIEWS_SUCCESS'

/* Action Creators */
export function loadMoviesSuccess(movies) {
    return {type: LOAD_MOVIES_SUCCESS, movies};
}

export function loadMoviesWithReviewsSuccess(movies) {
    return {type: LOAD_MOVIES_WITH_REVIEWS_SUCCESS, movies};
}

export function loadMovies() {
    return(dispatch) => {
        MoviesApi.getAllMovies().then(
            (result) => {
                dispatch(loadMoviesSuccess(result.data));
                console.log(result.data.slice(0,10));
            },
            (error) => {
                console.log("Something went wrong with the Movie API.");
            }
        )
    }    
}

export function loadMoviesWithReviews() {
    return(dispatch) => {
        MoviesApi.getAllMovies().then(
            (result) => {
                dispatch(loadMoviesWithReviewsSuccess(result.data));
                console.log(result.data.slice(0,10));
            },
            (error) => {
                console.log("Something went wrong with the Movie API.");
            }
        )
    }    
}

