import React from 'react';
import { ImGithub } from 'react-icons/im';
import { GrInstagram } from 'react-icons/gr';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { MdPhoneCallback } from 'react-icons/md';
import bgimg from '../assests/121.png';
import Label from './Label';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <section className='foot'>
      <Container>
        <Row>
          {/* First Column */}
          <Col sm={12} md={3} className='mt-4 mb-5'>
            <div className="logo">
              <Label text="Zabik" fontSize="60px" color="#ad4907" />
              <p>
                serving fresh and delicious food
              </p>
              <div className='icons'>
                <a href="/"><ImGithub style={{ color: "#ad4907", margin: "3px", height: "30px", width: "35px" }} /></a>
                <GrInstagram style={{ color: "#ad4907", margin: "3px", height: "30px", width: "35px" }} />
                <AiFillTwitterCircle style={{ color: "#ad4907", margin: "3px", height: "30px", width: "35px" }} />
                <AiFillLinkedin style={{ color: "#ad4907", margin: "3px", height: "30px", width: "35px" }} />
              </div>
              <p className="text-light m-2">Amaryllis &copy; 2023</p>
            </div>
          </Col>

          {/* Second Column */}
          <Col sm={12} md={3} className="d-flex justify-content-center align-items-center mt-5 mb-5">
            <div className='bgimg'>
              <img src={bgimg} alt="Background" className="bgimg-icon img-fluid" />
            </div>
          </Col>

          <Col sm={12} lg={6} className="order-3 order-md-2 mt-5 mb-5">
            <div className="d-flex flex-column flex-md-row">
              <ul className="tabs flex-grow-1">
                <Label text="Home" fontSize="20px" color="#ad4907" />
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">Menu</a></li>
                  <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">About</a></li>
                  <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">Why Us</a></li>
                  <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">Contact Us</a></li>
                </ul>
              </ul>
              <ul className="business-info flex-grow-1 flex-md-grow-0">
                <Label text="Business Hours" fontSize="20px" color="#ad4907" />
                <ul className="nav">
                  <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">WeekDays: 4AM - 11PM</a></li>
                  <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">Weekends: 9AM - 11PM</a></li>
                </ul>
              </ul>
              <ul className="location flex-grow-1 flex-md-grow-0">
                <Label text="Address" fontSize="20px" color="#ad4907" />
                <ul className="nav">
                  <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">Dubai Road,Near Girls Comprehensive School Gulgasht,Multan.</a></li>
                </ul>
                <h5>Phone Number</h5>
                <ul className="nav">
                  <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light"><MdPhoneCallback />+92 309 111 2276</a></li>
                </ul>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
