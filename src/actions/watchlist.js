import WatchlistAPI from '../apis/watchlist_api';

/* Action Types */
export const LOAD_WATCHLIST_WITH_MOVIES_SUCCESS = 'LOAD_WATCHLIST_WITH_MOVIES_SUCCESS'

/* Action Creators */
export function loadWatchlistWithMoviesSuccess(watchlist) {
    return {type: LOAD_WATCHLIST_WITH_MOVIES_SUCCESS, watchlist };
}

export function loadWatchlistWithMovies() {
    return(dispatch) => {
        WatchlistAPI.getWatchlistWithMovies().then(
            (result) => {
                dispatch(loadWatchlistWithMoviesSuccess(result.data));
                console.log(result.data);
            },
            (error) => {
                console.log("Something went wrong with the Watchlist API.")
            }
        )
    }
}







