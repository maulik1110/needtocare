import "./App.css";
import React, { useState } from "react";
import Search from "./Search.svg";
import { useEffect } from "react";
// import './Moviecard'
import Moviecard from "./Moviecard";

const API_URL = "http://www.omdbapi.com?apikey=71aac2c2";

// const movie = {
//   Title: "Coming to America",
//   Year: "1988",
//   imdbID: "tt0094898",
//   Type: "movie",
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BNGZlNjdlZmMtYTg0MC00MmZkLWIyNDktYmNlOWYzMTkzYWQ1XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
// };

function App() {
  const [movies, setMovies] = useState([]);
  const [search,setSearch] = useState('');

  const searchmovie = async (title) => {
    const response = await fetch(`${API_URL}&s={${title}}`);
    // &s= performs search operation in data
    const data = await response.json();
    setMovies(data.Search);
    console.log(data.Search);
    // 'Search' bcz api data me Search ke andar data h ye
  };

  useEffect(() => {
    searchmovie("america");
  }, []);

  return (
    // <h1>App</h1>
    <div className="app">
      <h1>Movie App</h1>

      <div className="search">
        <input
          placeholder="search for movies"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img src={Search} alt="search-icon" onClick={() => searchmovie(search)}></img>
      </div>

      {/* {movies?.length > 0 ? (
        <div className="container">
          {
            movies.map((movie)=>{
              <Moviecard movie={movie}/>
            })
          }
        </div>
      ) : (
        <div className="empty">
          <h2>Movie not found</h2>
        </div>
      )} */}
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <Moviecard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>Movie not found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
