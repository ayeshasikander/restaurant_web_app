import React from 'react';
import Rating from './Rating';
import { AiOutlinePhone, AiOutlineShoppingCart } from 'react-icons/ai';

export default function Deals({ deal }) {

  return (

    <div className='cards' key={deal.id}>
      <div id="detail">
        <div className='deal-name'>
          <h2>{deal.dealName}</h2>
        </div>
        <div className='deal-items'>
          <p>{deal.item1}</p>
        </div>
        <Rating />
        <div className='deal-order'>
          <div className="button-container">
            <button className="button">
              <AiOutlinePhone id='icon'/>
            </button>
            <button className="button">
              <strong id='price'>{deal.price}</strong>
            </button>
            <button className="button">
              < AiOutlineShoppingCart id='icon'/>
            </button>
          </div>
        </div>
      </div>
      <div className='deal-pamphlet'>
        <img src={deal.dealImage} alt="pizza deals" />
      </div>

    </div>

  )
}
