/* eslint-disable react/no-unescaped-entities */
import './Banner.css'
import imdb from '../../Images/imdb.png';
import tomat from '../../Images/tomat.png';


const Banner = () => {

  return (

    <div className='banner'>
      <div className='banner__content'>
        <h1 className='banner__title'>John Wick 3 : Parabellum</h1>
        <div className="banner__rating">

          <div className="imdb-R"> <img className='imdb' src={imdb} alt="imdb" /> <p>86.6/100</p></div>
          <div className="rotenTomato"><img src={tomat} alt="rotten tomato" className="tomat" /> <p>94%</p>
          </div>

        </div>
        <h2 className='movie__overview'>
          John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.
        </h2>
        <div className='banner__buttons'>

          <button>
            WATCH TRAILER
          </button>
        </div>
      </div>

    </div>
  )
}

export default Banner
