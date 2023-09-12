/* eslint-disable react/prop-types */
/*
import './Row.css'
import Movie from "./Movie";



const Row = ({ title, movies }) => {
console.log(movies)
  return (
    <div className="Featured">
      <div className="item">
        <h2>{title}</h2>
        <p>See more</p>
      </div>

      <div className="row__posters" data-testid="movie-card">
        {movies.length > 0 &&
          movies.map((movie) => (
            <Movie
              key={movie.id}
              {...movie}
            />
          ))}
      </div>
    </div>
  )
}

export default Row
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
