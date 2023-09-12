/* eslint-disable react/prop-types */
// import { useParams } from "react-router-dom"
import { useParams } from "react-router-dom"
import leftSide from "../../Images/Group21.png"
import ads from "../../Images/Group52.png"
import rate from "../../Images/Group55.png"
import bottom from "../../Images/Group61.png"
import "./MovieDetails.css"
import { useEffect, useState } from "react"
const API_KEY = '5cedf290c2dd581f3b1b6ed4c6562713';

const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280/";

const MovieDetails = () => {
  const { id } = useParams(); // Access the 'id' from the URL
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    // Fetch movie details using the 'id' from the URL
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
      })
      .catch((error) => {
        console.error('Error fetching movie details:', error);
      });
  }, [id]); // Make sure to include 'id' in the dependency array

  if (!movieDetails) {
    return <div>Loading...</div>; // Display a loading indicator while fetching data
  }

  return (
    <div className="movie__details">
      <div className="left_side">
       <img src={leftSide} alt="Menu" />
      </div>
      <div className="right_side">
        <div className="playnow">
        <img
        src={IMAGE_PATH + movieDetails.poster_path}
        alt={movieDetails.title}
      />
        </div>
        <div className="bottom_side">
          <div className="Bottom_right">
           <div className="movieD-title-Wrapper">
           <div  className="movieD-title">
          <h3 className="name" data-testid="movie-title"> {movieDetails.title}</h3>
          <h3 data-testid="movie-release-date"> • {movieDetails.release_date}</h3>
          <h3 data-testid="movie-title"> • 73min</h3>
          <h3> • {movieDetails.vote_average}</h3>
            </div>
            <div> 
               <p data-testid="movie-overview"> {movieDetails.overview}</p>
            </div>
           </div>
           <img src={bottom} alt="bottom" />
          </div>
          <div className="bottom_left">
            <img src={rate} alt="rate" />
            <img src={ads} alt="ads" />


          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
