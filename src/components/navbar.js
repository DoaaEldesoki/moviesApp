import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import { axiosInstace } from "../Network/axiosConfig";
import '../App.css'
import Movie from "./movie";

const SEARCH_api = "https://api.themoviedb.org/3/search/movie?api_key=c5e8f13c16ef17ae472b2cf2b9beceec&query="

function Navbar() {
  const [searchTerm, setSearchTerm] = useState("")
  const [results, setResults] = useState([])


  //   const [movies, setMovies] = useState([])
  const onChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value)
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=c5e8f13c16ef17ae472b2cf2b9beceec&query=${e.target.value}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          console.log(data.results)
          setResults(data.results);
        } else {
          setResults = ([]);
        }
      }
      );
  }

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <Link class="navbar-brand" to="">MoviesApp </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">Movies</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/favourites">Favourites</Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/signin">SignIn</Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/register">Register</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/home">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/watchlist">watchlist</Link>
              </li>
            </ul>
           
          </div>
        </div>
      </nav>

    </div>

  )
}
export default Navbar;