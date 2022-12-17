import axios from 'axios'
import React, {Fragment, useEffect, useState, useContext} from 'react'
import {AiFillPlayCircle} from 'react-icons/ai'
import { Container } from './NavBar'
import NoImg from './NoImg.png'
import '../Styles/Videos.css'

function Movies() {
    // const {toggle} = useContext(Container)
    const [moviesData, setMoviesData] = useState([]);
    const Api = "https://api.themoviedb.org/3/discover/movie"
    const Images = "https://image.tmdb.org/t/p/w500"

    const MovieCall = async () => {
        const data  = await axios.get(Api,{
            params:{
                api_key: 'ba8f4caa4e6ebec49f8c6b8ba603ed04',
            }
        })
        const results = data.data.results
        setMoviesData(results)
    }
    useEffect(() => {
        MovieCall()
    }, [])
  return (
    <Fragment>
        <div className='secondaryBgColor'>
        <div className='movies-container'>
        {moviesData.map((movie) => {
            return(
            <Fragment>
                <div id='container'>
                    <AiFillPlayCircle color='green' fontSize={40} id='playIcon'/>
                    <img src={movie.poster_path ? `${Images}${movie.poster_path}` : NoImg } alt=''/>
                    <h3>{movie.title}</h3>
                </div>
            </Fragment>
            )
        })}
        </div></div>
    </Fragment>
  )
}

export default Movies