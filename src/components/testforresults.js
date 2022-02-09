import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'
import { MovieControls } from './MovieControl';
import { MovieCard } from './MovieCard';
export  const ResulttMovies = ({ movie,type }) => {
   const {
        addMovieToFavlist, FavList
    } = useContext(GlobalContext);
    let storedMovie= FavList?.find(o=> o.id === movie.id)
    const watchlistDisabled = storedMovie? true : false ;
    return (
      
            <div>
                <button  
                disabled={watchlistDisabled}
                onClick={()=>addMovieToFavlist(movie)}
                 className='btn btn-success'>
                    Add To Favourites
                </button>
            </div>
    )
};
