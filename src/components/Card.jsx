import React from 'react';
import { Row, Col } from 'react-bootstrap';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';
import Rating from './Rating';
import Order from './Order';
import { MdFavorite } from 'react-icons/md';


export default function Card({ menuX }) {
  return (
    <Row>
      {
        menuX.map((x) => {
          const { id, image, itemName, priceLg, priceMd, priceSl } = x
          return (
            <Col xl={3} lg={4} md={6} sm={12} className='card1' key={id}>
              <div className='content1'>
                <div id='favrite'>
                  <MdFavorite id='fav'/>
                </div>
                <div className='menu-img'>
                  <svg className='circle-image' width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                    <image href={image} height="200px" width="200px" />
                  </svg>
                  <hr style={{ height: "7px", width: "100%", color: "#522406", marginTop: "20px" }}></hr>
                </div>

                <div className='menu-content'>
                  <h3>{itemName}</h3>
                </div>
                <div className='star'>
                  <Order/>
                  <Rating />
                </div>
                <div className="btn-group" role="group" aria-label="Basic outlined example">
                  <p data-tooltip-id={`my-tooltip-${x.id}-Lg`} data-tooltip-content={priceLg}>
                    <button type="button" className="btn1">Lg</button>
                  </p>
                  <Tooltip place='bottom' id={`my-tooltip-${x.id}-Lg`} />
                  <p data-tooltip-id={`my-tooltip-${x.id}-md`} data-tooltip-content={priceMd}>
                    <button type="button" className="btn1">Md</button>
                  </p>
                  <Tooltip place='bottom' id={`my-tooltip-${x.id}-md`} />
                  <p data-tooltip-id={`my-tooltip-${x.id}-Sm`} data-tooltip-content={priceSl}>
                    <button type="button" className="btn1">Sm</button>
                  </p>
                  <Tooltip place='bottom' id={`my-tooltip-${x.id}-Sm`} />
                </div>
              </div>
            </Col>
          )

        })}
    </Row>
  )
}
