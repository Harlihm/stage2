/* eslint-disable react/prop-types */
/*
const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280/";
import { Link } from 'react-router-dom';
import imdb from '../../Images/imdb.png';
import tomat from '../../Images/tomat.png';

const Movie = ({ title, poster_path, vote_average,id, release_date }) => {
  let vote = vote_average / 10 * 100;
  let roundedVote = parseFloat(vote.toFixed(1));



  return (
    <div className="row__poster">
      <img data-testid="movie-poster" className='poster' src={IMAGE_PATH + poster_path} alt={title} />
      <p data-testid="movie-release-date">{release_date}</p>
      <Link to={`/movieDetails/${id}`}>
        <p data-testid="movie-title" className='row__title'>{title}</p>
        <div className="row__rating">
          <div className="imdb-R"> <img className='imdb' src={imdb} alt="imdb" /> <p>{roundedVote}/100</p></div>
          <div className="rotenTomato"><img src={tomat} alt="rotten tomato" className="tomat" /> <p>{roundedVote}%</p></div>
        </div>
      </Link>
    </div>
  )
}

export default Movie
*/

import React from 'react';
import './Row.css';
import Movie from './Movie';

const Row = ({ title, movies }) => {
  console.log(movies);

  // Define a variable to store the sliced movie groups
  const movieGroups = [];

  // Loop through the movies and slice them into groups of 10
  for (let i = 0; i < movies.length; i += 10) {
    const movieGroup = movies.slice(i, i + 10);
    movieGroups.push(movieGroup);
  }

  return (
    <div className="Featured">
      <div className="item">
        <h2>{title}</h2>
        <p>See more</p>
      </div>

      {/* Map through the movieGroups array instead of the movies array */}
      <div className="row__posters" data-testid="movie-card">
        {movieGroups.map((group, index) => (
          <div key={index} className="group">
            {group.map((movie) => (
              <Movie key={movie.id} {...movie} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Row;
