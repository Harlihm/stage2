/* eslint-disable react/prop-types */
import './Row.css';
import Movie from './Movie';

const Row = ({ title, movies }) => {
  console.log(movies);

  const first10Movies = movies.slice(0, 10);

  return (
    <div className="Featured">
      <div className="item">
        <h2>{title}</h2>
        <p>See more</p>
      </div>

      <div className="row__posters" data-testid="movie-card">
        {first10Movies.length > 0 &&
          first10Movies.map((movie) => (
            <Movie key={movie.id} {...movie} />
          ))}
      </div>
    </div>
  );
};

export default Row;
