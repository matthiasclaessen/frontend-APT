import { LOAD_WATCHLIST_WITH_MOVIES_SUCCESS } from '../actions/watchlist';

const watchlist = (watchlist = [], action) => {
    switch (action.type) {
        case LOAD_WATCHLIST_WITH_MOVIES_SUCCESS:
            return action.watchlist;
        default:
            return watchlist;
    }
};

export default watchlist;