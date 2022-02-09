import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import { axiosInstace } from "../Network/axiosConfig";
import '../App.css'
import Movie from "./movie";
import { ResultMovies } from "./ResultMovies";

const SEARCH_api = "https://api.themoviedb.org/3/search/movie?api_key=c5e8f13c16ef17ae472b2cf2b9beceec&query="

function Home() {
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
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">

                    <form class="d-flex " >
                        <input class="form-control me-2"
                            type="text"
                            placeholder="Search"
                            aria-label="Search"
                            value={searchTerm}
                            onChange={onChange}
                        />

                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            {results.length > 0 && (
                <ul>
                    {results.map((movie) => (
                        <li key= {movie.id}>
                            <ResultMovies movie={movie}/>
                        </li>
                    ))}
                </ul>
            )}

        </div>

    )
}
export default Home;