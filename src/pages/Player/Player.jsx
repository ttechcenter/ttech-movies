import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './player.css';
import TitleCards from '../../components/TitleCards/TitleCards';

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: '',
    key: '',
    published_at: '',
    type: '',
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzQzMThhYjAzYTE5OWQyZDMyN2JlYzViOTU1NTcyYyIsIm5iZiI6MTc2Nzk3NzQ4MS43ODMsInN1YiI6IjY5NjEzMjA5MjlkZjAxYzcyNGJkMzJjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6Di5NRQXhiqXk71TU1Efvo1nbsrN4gpqM3oYQkQY5jc',
    },
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then((res) => res.json())
      .then((res) => {
        if (res.results && res.results.length > 0) {
          setApiData(res.results[0]);
        }
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className="player">
      {/* 🔙 Back Button */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        <i className="fa-solid fa-arrow-left"></i>
      </button>

      {/* 🎬 Video Player */}
      <div className="video-wrapper">
        {apiData.key && (
          <iframe
            src={`https://www.youtube.com/embed/${apiData.key}?autoplay=1&modestbranding=1`}
            title="Trailer"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        )}
      </div>

      {/* ℹ️ Info */}
      <div className="player-info">
        <p>{apiData.published_at?.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    
    </div>
  );
};

export default Player;
