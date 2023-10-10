import React from 'react'
import GoogleMapReact from 'google-map-react';

const Marker = ({ text }) => <div>{text}</div>

const About = ({ center, zoom }) => {
  return (
    <div style={{ height: "300vh", width: "300%" }}>
      <GoogleMapReact bootstrapURLKeys={{ key: 'AIzaSyD7HOFihGRyhxlE5wsVK3UOfzp6dO-yLZg' }}
        defaultCenter={center}
        defaultZoom={zoom} >

        <Marker lat={59.955413}
          lng={30.337844}
          text="my marker" />
      </GoogleMapReact>
    </div>
  );
}

About.defaultProps = {
  center: { lat: 59.95, lng: 30.33 },
  zoom: 11
};

export default About;
