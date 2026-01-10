import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import banner from '../../../public/banner5.avif'
import banner_title from '../../../public/banner5.png'
import TitleCards from '../../components/TitleCards/TitleCards';
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <div className="hero">
          <img src={banner} alt="" className='banner-img'/>
          <div className="banner-caption">
            <img src={banner_title} alt="" className='caption-img' />
            <p>An action-packed spin-off where rival agents Hobbs and Shaw are forced to work together to stop a cyber-enhanced 
              terrorist threatening global security, delivering explosive action, fast cars, and sharp humor.
            </p>
            <div className="banner-btns">
                  <button className="btn btn-play">
                       <i className="fa-solid fa-play"></i> 
                         Play
                  </button>

                  <button className="btn btn-info">
                       <i className="fa-solid fa-circle-info"></i>
                          More Info
            </button>
          </div>

        <TitleCards/>
          </div>
        </div>
        <div className="more-cards">
          <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
          <TitleCards title={"Only on TTech Movies"} category={"popular"}/>
          <TitleCards title={"Upcoming"} category={"upcoming"}/>
          <TitleCards title={"Top Pics for You!"} category={"now_playing"}/>
        </div>
        <Footer/>
    </div>
  )
}

export default Home