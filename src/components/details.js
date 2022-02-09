import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Movie from './movie'
import { axiosInstace } from '../Network/axiosConfig';

function Details() {
    const [movie, setTitle] = useState({});

    const params = useParams()
    console.log(params)
    useEffect(() => {

        axiosInstace.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=c5e8f13c16ef17ae472b2cf2b9beceec`)

            .then((res) => setTitle(res.data))
            .catch((err) => console.log(err))
    },[])
    return (
        <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-3">
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} width="300px" className="img-fluid" alt="..." />
                </div>
                <div className="col-md-6">
                    <p>{movie.original_title}</p>
                    {movie?.genres?.map(e => (
                        <p className="badge bg-dark p-2 me-2">{e.name}</p>
                    ))}
                    <p>{movie.release_date}</p>
                    <p>{movie.overview}</p>
                    <p></p>
                </div>
            </div>
        </div>
    </>
);
}
        // <div >
            // <div className=''>
            {/* <h3 className='d-flex justify-content-center'> {movie.title}</h3>
            
            </div>
            <div className=''>
            <Movie key={movie.id}{...movie}/>
            <h4>  release Date :{movie.release_date}</h4>
            <h4> original language:{movie.original_language}</h4> */}



            /* </div>
         <h2 className='d-flex justify-content-center'> Overview: {movie.overview}</h2>

        </div>
         */


export default Details;