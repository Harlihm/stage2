// App.js
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import Home from './Assets/Home/Home';
import MovieDetails from './Assets/Movie/MovieDetails';

const Root = () => {
  return (
    <>
      <div></div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="/movieDetails/:id" element={<MovieDetails />} /> 
    </Route>
  )
);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
