import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadWatchlistWithMovies } from '../actions/watchlist';

import Watchlist from '../components/watchlist';

import store from '../store';

class WatchlistContainer extends Component {
    constructor(props) {
        super();
    }

    componentDidMount() {
        store.dispatch(loadWatchlistWithMovies())
    }

    render() {
        return (
            <Watchlist watchlist={this.props.watchlist} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        watchlist: state.watchlist
    };
};

export default connect(mapStateToProps)(WatchlistContainer);