import axios from 'axios';

const BaseUrl = "http://192.168.99.100:32000/";

class MoviesApi {
    static getAllMovies() {
        return axios.get(BaseUrl + "movie/all");
    }

    static getMovieByUUID(uuid) {
        return axios.get(BaseUrl + "movie/" + uuid);
    }

    static getMovieWithReviews(movieUuid) {
        return axios.get(BaseUrl + "reviews/movie/" + movieUuid)
    }
}

export default MoviesApi;