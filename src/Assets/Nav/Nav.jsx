/* eslint-disable react/prop-types */
import { useState } from 'react';
import menu from '../../Images/Menu.png';
import tv from '../../Images/tv.png';
import './Nav.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SEARCH_URL =
  'https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&api_key=a791ad0f144ddfcc6ebe3aa512ef4f43&query=';

const Nav = ({ setMovies, setTitle }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(SEARCH_URL + searchTerm);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setMovies(data.results);
      setTitle("Searched Results");

      notify("Loaded Successfully");
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const notify = (message) => {
    toast(message);
  };

  return (
    <div className="nav">
      <div className="nav_title">
        <img src={tv} alt="tv logo" />
        <h2>MovieBox</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="search">
          <input
            onChange={handleChange}
            value={searchTerm}
            type="search"
            placeholder="What do you want to watch?"
          />
          <svg
            width="23"
            height="20"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 13L9 9M10.3333 5.66667C10.3333 8.244 8.244 10.3333 5.66667 10.3333C3.08934 10.3333 1 8.244 1 5.66667C1 3.08934 3.08934 1 5.66667 1C8.244 1 10.3333 3.08934 10.3333 5.66667Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </form>
      <div className="nav_menu">
        <button>Sign in</button>
        <img src={menu} alt="menu button" />
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </div>


  );
};

export default Nav;
