import requests from '../../requests';
import Row from '../../Assets/Row/Row';
import Banner from '../../Assets/Banner/Banner';
import Nav from '../../Assets/Nav/Nav';
import { useEffect, useState } from 'react';
const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a791ad0f144ddfcc6ebe3aa512ef4f43&page=1";

function Home() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState('Featured Movies');


  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMovies(data.results);
        console.log(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchMovies();
  }, []);


  return (
    <div className='app'>
      <Nav movies={movies} setMovies={setMovies} title={title} setTitle={setTitle} />
      <Banner fetchUrl={requests.fetchTrending} />
      <Row movies={movies} setMovies={setMovies} title={title} setTitle={setTitle} fetchUrl={requests.fetchNetflixOriginals} />
    </div>
  );
}


export default Home;
