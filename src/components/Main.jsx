import React from 'react';
import pizza from "../assests/pizza.mp4";
import Modal from './Modal';
const Main = () => {
  const [modalShow, setModalShow] = React.useState(false);
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
      </div>
    </section>
  );
}

export default Main;