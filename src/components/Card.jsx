import React from 'react';
import contentItem from '../data/content';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip'
export default function Card() {

  return (
    <div className='mainrow row1'>
      {contentItem.map((x) => (
        <div className='card1' key={x.id}>
          <div className='content1'>
            <div className='menu-img'>
              <img className='circle-image' src={x.image} alt='pizza' />
              <hr style={{ height: "7px", width: "100%", color: "#522406", marginTop: "20px" }}></hr>
            </div>
            <div className='menu-content'>
              <h3>{x.itemName}</h3>
            </div>
            <div className="btn-group" role="group" aria-label="Basic outlined example">
              <p data-tooltip-id={`my-tooltip-${x.id}-Lg`} data-tooltip-content={x.priceLg}>
                <button type="button" className="btn1">Lg</button>
              </p>
              <Tooltip place='bottom' id={`my-tooltip-${x.id}-Lg`}/>
              <p data-tooltip-id={`my-tooltip-${x.id}-md`} data-tooltip-content={x.priceMd}>
                <button type="button" className="btn1">Md</button>
              </p>
              <Tooltip place='bottom' id={`my-tooltip-${x.id}-md`} />
              <p data-tooltip-id={`my-tooltip-${x.id}-Sm`}data-tooltip-content={x.priceSl}>
                <button type="button" className="btn1">Sm</button>
              </p>
              <Tooltip place='bottom' id={`my-tooltip-${x.id}-Sm`}/>
            </div>
          </div>
        </div>
      ))}

    </div>

  )
}
