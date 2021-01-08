import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadMovies } from '../actions/movies';

import Movies from '../components/movies';

import store from '../store';

class MoviesContainer extends Component {
    constructor(props) {
        super();
    }

    componentDidMount() {
        store.dispatch(loadMovies())
    }

    render() {
        return (
            <Movies movies={this.props.movies} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
};

export default connect(mapStateToProps)(MoviesContainer);