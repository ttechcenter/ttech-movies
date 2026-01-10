import React, { useEffect, useRef, useState } from 'react'
// import cards_data from '../../assets/cards/cards_data.js';
import './TitleCards.css'
import {Link} from 'react-router-dom';

const TitleCards = ({title,category}) => {
  
  const [apiData,setApiData]=useState([]); 
  const cardsref=useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzQzMThhYjAzYTE5OWQyZDMyN2JlYzViOTU1NTcyYyIsIm5iZiI6MTc2Nzk3NzQ4MS43ODMsInN1YiI6IjY5NjEzMjA5MjlkZjAxYzcyNGJkMzJjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6Di5NRQXhiqXk71TU1Efvo1nbsrN4gpqM3oYQkQY5jc'
  }
};

  const handlewheel = (event) =>{
  event.preventDefault();
  cardsref.current.scrollLeft +=event.deltaY;
  }

  useEffect(()=>{

   fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

   cardsref.current.addEventListener('wheel',handlewheel); },
   [])

  return (
    <div className='title-cards'>
        <h2>{title?title:"Popular on TTech Movies!"}</h2>
        <div className="card-list" ref={cardsref}>
          {apiData.map((card,index)=>{
            return <Link to={`/player/${card.id}`} className='card' key={index}>
                      <img src={`https://image.tmdb.org/t/p/w500`+ card.backdrop_path} alt="" />
                      <p>{card.original_title}</p>
                   </Link>
          })}
        </div>
    </div>
  )
}

export default TitleCards