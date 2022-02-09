// import '../index.css'
import '../App.css'
import React, { useEffect, useState, useContext } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import Movie from '../components/movie';
import { GlobalContext } from '../context/GlobalState'
import Loader from './Loader';
import { Link } from 'react-router-dom';
import { axiosInstace } from '../Network/axiosConfig';
import CustomPagination from '../components/customPagination'
import MoviesCard from './fav'
import CardActions from "@mui/material/CardActions";
import {
    addFavoriteAction,
    removeFavoriteAction,
  } from '../store/actions/favourite'



export default function MyApp() {
    const [page, setPage] = useState(1);
    const [movies, setMovies] = useState([])


//     var favorites = JSON.parse(localStorage.getItem('favorites')) || [];
// favorites.forEach(function(favorite) {
//   document.getElementById(favorite).className = 'fav';
// });
// document.querySelector('.movie-flex').addEventListener('click', function(e) {
//   var id = e.target.id,
//       item = e.target,
//       index = favorites.indexOf(id);
//   if (!id) return;
//   if (index == -1) {
//     favorites.push(id);
//     item.className = 'fav';
//   } else {
//     favorites.splice(index, 1);
//     item.className = '';
//   }
//   localStorage.setItem('favorites', JSON.stringify(favorites));
// });

///////////////////////////////
//     var favorites = JSON.parse(localStorage.getItem('favorites')) || [];
// // add class 'fav' to each favorite
// favorites.forEach(function(favorite) {
//   document.getElementById(favorite).className = 'fav';
// });
// // register click event listener
// document.querySelector('.list').addEventListener('click', function(e) {
//   var id = e.target.id,
//       item = e.target,
//       index = favorites.indexOf(id);
//   // return if target doesn't have an id (shouldn't happen)
//   if (!id) return;
//   // item is not favorite
//   if (index == -1) {
//     favorites.push(id);
//     item.className = 'fav';
//   // item is already favorite
//   } else {
//     favorites.splice(index, 1);
//     item.className = '';
//   }
//   // store array in local storage
//   localStorage.setItem('favorites', JSON.stringify(favorites));
// });

// local storage stores strings so we use JSON to stringify for storage and parse to get out of storage
// const addFav = (props) => {
// let array = favorites;
// let addArray = true;
// array.map((item, key)=> {
//     if (item=== props.i){
//         array.splice(key, 1)
//         addArray= false;
//     }
// });
// if (addArray){
//     array.push(props.i)
// }
// setFavorites([...array])
// localStorage.setItem("favorites", JSON.stringify(favorites));
// var storage = localStorage.setItem("favItem"+ (props.i) || '0')
// if (storage == null) {
//     localStorage.setItem('favItem' + (props.i), JSON.stringify(props.items))
// }else {
//     localStorage.removeItem('favItem'+ (props.i))
// }
// }
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        axiosInstace
            .get(`/popular?api_key=c5e8f13c16ef17ae472b2cf2b9beceec&page=${page}`)
            .then((res) => {
                setMovies(res.data.results)
                setIsLoading(false)
            })
            .catch((err) => console.log(err))
    }, [page]);
    return (
        <div className='movie-container'>

            {isLoading ?
                <Loader />
                : movies?.length > 0 &&
                movies.map((movie) => {
                    return (
                        <div className='movie-flex'>
                            <Link key={movie.id} to={`/details/${movie.id}`}>
                                <Movie key={movie.id}{...movie} /> </Link>
                            <button className='btn btn-success'> Add To Favourite</button>
                            <td>
         
    {/* <MoviesCard /> */}

                            </td>
                        </div>

                    )
                }
                )}
            <CustomPagination setPage={setPage} />

        </div>
    )
}
