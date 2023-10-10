import React from 'react';
import { Container, Col } from 'react-bootstrap'
import GoogleMapReact from 'google-map-react';

const Marker = ({ text }) => <div>{text}</div>

const Location = ({ center, zoom }) => {
  return (
    <section>
      <Container className='map-container'>
        <Col className='map-box'>
          <div className='map'>
            <GoogleMapReact bootstrapURLKeys={{ key: 'AIzaSyD7HOFihGRyhxlE5wsVK3UOfzp6dO-yLZg' }}
              defaultCenter={center}
              defaultZoom={zoom} >

              <Marker lat={30.21972} lng={71.47111} text="Zabik" />
            </GoogleMapReact>
          </div>
        </Col>
      </Container>
      
    </section>

  );
}

Location.defaultProps = {
  center: { lat: 30.21, lng: 71.47 },
  zoom: 11
};

export default Location;
