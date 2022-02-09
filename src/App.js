import './App.css';
import './index.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Favourites from './components/favourites';
import Details from './components/details'
import Navbar from './components/navbar'
import React, { useEffect, useState } from 'react';
import Movie from './components/movie';
// import Movies from './components/movies';
import { useSelector } from "react-redux";
import MyApp from './components/mymovies';
// import Mytest from './components/testforhome';
import Home from './components/Home';
import { GlobalProvider } from './context/GlobalState';
import { Watchlist } from './components/watchlist';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";


function App() {
    // const Favourite = useSelector((state) => state.Favourite.app_favourite);
    return (
        <div
     
        >
            <GlobalProvider>
                <BrowserRouter>
                    <Navbar />
                    <Switch>
                        <div className="App">
                            <Route path={"/"} exact component={MyApp} />
                            <Route path={"/favourites"} exact component={Favourites} />
                            <Route path={"/details/:id"} exact component={Details} />
                            <Route path={"/home"} exact component={Home} />
                            <Route path={"/watchlist"} exact component={Watchlist} />



                        </div>
                    </Switch>
                </BrowserRouter>
                </GlobalProvider>
        </div>
    );
}


export default App;
