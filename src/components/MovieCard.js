import React, { StrictMode } from "react";
import { MovieControls } from "./MovieControl";

export const MovieCard = ({ movie, type }) => {
    return (
        <div>
            <div></div>
            {movie.poster_path ? (
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={`${movie.title} Poster`}
                />

            ) : (
                <div> No Movies </div>
            )}
            <div>  <div className='header'>
                <h3> {movie.title}</h3>
                <h4> {movie.release_date ? movie.release_date.substring(0, 4) : "_"}</h4>

            </div></div>
            <MovieControls type={type} movie={movie} />

        </div>

    )

}