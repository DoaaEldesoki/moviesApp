import React from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { MovieCard } from './MovieCard';

import { MovieControls } from './MovieControl';

export const Watchlist = () => {

    const { watchlist } = useContext(GlobalContext)

    return (
        <div>
            <h2> My Watchlist</h2>
            {watchlist.length > 0 ? (
                <div>
                    {watchlist.map((movie) => (
                        <MovieCard movie={movie} type="watchlist" />
                    ))}
                </div>
            ) : (
                <h2> No Movies </h2>
            )}
        </div>
    )
}
