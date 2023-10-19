import React from 'react';
import pizza from "../assests/pizza.mp4";
import Lottie  from 'lottie-react';
import animationData from '../assests/arrow.json';
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import { useState } from 'react';
import Modal from './Modal';

const Main = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <section className='main'>
      <div className="overlay"></div>
      <video className="background-video" src={pizza} autoPlay loop muted />
      <div className="content">
        <h1 className='m-2' style={{ fontFamily: "'Merriweather', serif" }}>"Welcome to Zabik's: Where Flavor Comes First"
        </h1>
        <div className='d-flex'>
          <button className="c-button c-button--gooey" style={{ fontFamily: "'Roboto', sans-serif" }} onClick={() => setModalShow(true)}>Order Now
            <div className="c-button__blobs">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </button>
          <Modal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />

          <a href='#menus' className="c-button c-button--gooey" id='menu-items' style={{ fontFamily: "'Roboto', sans-serif" }}> View Menu
            <div className="c-button__blobs">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </a>

        </div>
        <div className='vertical-line'>
          <h5 className='special-deal'> for special deals <a href="#platers"> <BsFillArrowRightCircleFill style={{color:"#ad4907"}}/></a></h5>
          <Lottie className='animation' animationData={animationData} />
        </div>
       
      </div>
      
    </section>
  );
}

export default Main;