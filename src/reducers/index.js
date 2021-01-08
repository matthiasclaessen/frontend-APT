import { combineReducers } from 'redux';

import movies from './movies_reducer';
import watchlist from './watchlist_reducer';

const reducers = combineReducers({
    movies,
    watchlist
});

export default reducers;