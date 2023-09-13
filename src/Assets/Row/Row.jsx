/* eslint-disable react/prop-types */
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
         movies.slice(0, 10).map((movie) => (
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
