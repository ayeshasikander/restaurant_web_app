import React from 'react';
import { Container, Row } from 'react-bootstrap'
import GoogleMapReact from 'google-map-react';

const Marker = ({ text }) => <div>{text}</div>

const Location = ({ center, zoom }) => {
  return (
    <Container>
      <Row>
        <div style={{ height: "50vh", width: "50%" }}>
          <GoogleMapReact bootstrapURLKeys={{ key: 'AIzaSyD7HOFihGRyhxlE5wsVK3UOfzp6dO-yLZg' }}
            defaultCenter={center}
            defaultZoom={zoom} >

            <Marker lat={30.21972} lng={71.47111} text="My Location" />
          </GoogleMapReact>
        </div>
      </Row>
    </Container>
  );
}

Location.defaultProps = {
  center: { lat: 30.21, lng: 71.47 },
  zoom: 11
};

export default Location;
