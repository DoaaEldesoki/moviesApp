import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'
import { MovieControls } from './MovieControl';
import { MovieCard } from './MovieCard';
export const ResultMovies = ({ movie,type }) => {
    const {
        addMovieToWatchlist, watchlist
    } = useContext(GlobalContext);
    let storedMovie= watchlist.find(o=> o.id === movie.id)
    const watchlistDisabled = storedMovie? true : false ;
    return (<div className='movie-container'>
        <div className='movie'>
            {movie.poster_path ? (
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`${movie.title} Poster`}
                />
            ) : (
                <div className='filler-poster'>
                </div>
            )}
        </div>
        <div className='movie'>
            <div className=''>
                <h3> {movie.title}</h3>
                <h4> {movie.release_date ? movie.release_date.substring(0, 4) : "_"}</h4>

            </div>
            <div>
                <button  
                disabled={watchlistDisabled}
                onClick={()=>addMovieToWatchlist(movie)}
                 className='btn btn-success'>
                    Add To watchlist

                </button>
                       {/* <MovieControls type={type} movie={movie} /> */}


            </div>

        </div>
    </div>
    )
};
