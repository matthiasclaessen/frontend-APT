import React from 'react';

const Watchlist = ({ watchlist }) => {
    const output = watchlist.map((watchlist, i) => {
        return (
            <div key={i}>
                <p>{ watchlist.movie.title }</p>
            </div>
        );
        });


    return (
        <div className="watchlist">
            <h2>Watchlist</h2>
            {output}
        </div>
    );
}

export default Watchlist;