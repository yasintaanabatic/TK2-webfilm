import React, { Fragment, useState} from 'react'
import {HiSearch} from 'react-icons/hi'
import '../Styles/NavBarStyle.css'
import {Routes, Route, NavLink} from 'react-router-dom'
import Movies from './Movies'

export const Container = React.createContext()

function Navbar() {
    const [toggle, setToggle] = useState(true)
  return (
    <Container.Provider value={toggle}>
    <Fragment>
        <nav className="navBarColor">
            <div className='nav-options'>
                <h1 id='heading'>7Flix</h1>
                <NavLink to=''>
                <span id='MoviesLight'>Movies</span>
                </NavLink>
            </div>
            <div className='input-group'>
            <input type="text" placeholder='Search movies'></input>
            <HiSearch fontSize={21} color='grey' id='search'/>
            </div>
        </nav>
        <Routes>
            <Route path='' element={<Movies/>}/>
        </Routes>
    </Fragment>
    </Container.Provider>
  )
}

export default Navbar