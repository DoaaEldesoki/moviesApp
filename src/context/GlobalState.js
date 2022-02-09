import React, { useReducer, createContext, useEffect } from "react";
import  AppReducer from './AppReducer'
const INITIAL_STATE = {
    watchlist: localStorage.getItem("watchlist")
    ?JSON.parse(localStorage.getItem("watchlist")) 
    :[],
    watched: localStorage.getItem("watched")
    ?JSON.parse(localStorage.getItem("watched")) 
    :[],
    FavList: localStorage.getItem("FavList")?JSON.parse(localStorage.getItem("FavList"))
    :[],
    Favorite: localStorage.getItem("Favorite")?JSON.parse(localStorage.getItem("Favorite"))
    :[],
};
export const GlobalContext = createContext(INITIAL_STATE);
export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE);
    useEffect(()=>{
        localStorage.setItem("watchlist",JSON.stringify(state.watchlist))
        localStorage.setItem("watched",JSON.stringify(state.watched))

        localStorage.setItem("FavList",JSON.stringify(state.FavList))
        localStorage.setItem("Favorite",JSON.stringify(state.Favorite))

    },[state])
    ////////////////actions
    const addMovieToWatchlist = (movie) => {
        dispatch({
            type: "ADD_MOVIE_TO_WATCHLIST",
            payload: movie
        })
    }
    const removeMovieFromWatchlist = (id) => {
        dispatch({
            type: "REMOVE_MOVIE_FROM_WATCHLIST",
            payload: id
        })
    }
    const addMovieToFavlist = (movie) => {
        dispatch({
            type: "ADD_MOVIE_TO_FAVLIST",
            payload: movie
        })
    }
    const removeMovieFromFAVOURITE = (id) => {
        dispatch({
            type: "REMOVE_MOVIE_FROM_FAVOURITE",
            payload: id
        })
    }
///////////////////////////////////////
    return (
        <GlobalContext.Provider value={{
            watchlist: state.watchlist,
            watched: state.watched,
            FavList: state.FavList,
            Favorite: state.Favorite,
            addMovieToWatchlist,
            removeMovieFromWatchlist,
            addMovieToFavlist,
            removeMovieFromFAVOURITE

        }} >
            {props.children}
        </GlobalContext.Provider>
    )
}

