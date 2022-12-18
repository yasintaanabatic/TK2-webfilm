import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, NavLink } from "react-router-dom";
import "../Styles/NavBarStyle.css";

import { HiSearch } from "react-icons/hi";
import Movies from "./Movies";

import { NavDropdown } from "react-bootstrap";

export const Container = React.createContext();

const genre = ["Action", "Adventure", "Comedy", "Drama", "Horror"];

function Navbar() {
  const [toggle, setToggle] = useState(true);
  const [moviesData, setMoviesData] = useState([]);
  const [genresData, setGenresData] = useState([]);

  const Api = "https://api.themoviedb.org/3";

  const SearchMovies = async (search) => {
    const data = await axios.get(Api + "/search/movie", {
      params: {
        api_key: "ba8f4caa4e6ebec49f8c6b8ba603ed04",
        query: search,
      },
      
    });
    const results = data.data.results;
    setMoviesData(results);
  };
  const getGenres = async () => {
    const data = await axios.get(Api + "/genre/movie/list", {
      params: {
        api_key: "ba8f4caa4e6ebec49f8c6b8ba603ed04",
      },
      
    });
    const results = data.data.genres;
    setGenresData(results);
  };

  const MovieCall = async () => {
    const data = await axios.get(Api + "/discover/movie", {
      params: {
        api_key: "ba8f4caa4e6ebec49f8c6b8ba603ed04",
      },
    });
    const results = data.data.results;
    setMoviesData(results);
  };

  useEffect(() => {
    MovieCall();
    getGenres();
  }, []);

  return (
    <Container.Provider value={toggle}>
      <Fragment>
        <nav className="navBarColor nav-bar">
          <div className="nav-options">
            <h1 id="heading">7Flix</h1>
            <NavLink to="">
              <span id="MoviesLight">Movies</span>
            </NavLink>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="KATEGORI"
              menuVariant="dark"
            >
              {genresData.map((item) => (
                <div onClick={() => SearchMovies(item.name)}>
                    <NavDropdown.Item>{item.name}</NavDropdown.Item>
                </div>
              ))}
            </NavDropdown>
          </div>
          <div className="input-grouped">
            <input
              type="text"
              placeholder="Search movies"
              onChange={(e) => SearchMovies(e.target.value)}
            ></input>
            <HiSearch fontSize={21} color="grey" id="search" />
          </div>
        </nav>
        <Routes>
          <Route path="" element={<Movies data={moviesData} />} />
        </Routes>
      </Fragment>
    </Container.Provider>
  );
}

export default Navbar;
