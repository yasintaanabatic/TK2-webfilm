
import React, {Fragment} from 'react'
import {AiFillPlayCircle} from 'react-icons/ai'
import NoImg from './NoImg.png'
import '../Styles/Videos.css'

function Movies({data}) {
    // const {toggle} = useContext(Container)
   
    const Images = "https://image.tmdb.org/t/p/w500"


  return (
    <Fragment>
        <div className='secondaryBgColor'>
        <div className='movies-container'>
        {data.map((movie) => {
            return(
            <Fragment>
                <div id='container' className='card-movies'>
                    <AiFillPlayCircle color='red' fontSize={40} id='playIcon'/>
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