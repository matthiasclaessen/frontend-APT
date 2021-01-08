import axios from 'axios';

const BaseUrl = "http://192.168.99.100:32000/";

class WatchlistAPI {
    static getAll() {
        return axios.get(BaseUrl + "watchlist/all");
    }

    static getOne(uuid) {
        return axios.get(BaseUrl + "watchlist/" + uuid);
    }

    static getWatchlistWatched() {
        return axios.get(BaseUrl + "watchlist/watched");
    }

    static addItem(uuid) {
        return axios.post(BaseUrl + "watchlist/" + uuid);
    }

    static getWatchlistWithMovies() {
        return axios.get(BaseUrl + "watchlist/allwithmovie");
    }


    static deleteMovieFromWatchlist(movieUuid) {
        return axios.delete(BaseUrl + "watchlist/movieUuid")
    }

}

export default WatchlistAPI;