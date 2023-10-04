import React from 'react';
import { AiOutlinePhone } from 'react-icons/ai';

export default function Deals({ deal }) {

  return (

    <div className='cards' key={deal.id}>
      <div className='deal-pamphlet'>
        <img src={deal.dealImage} alt="pizza deals" />
      </div>
      <div className='deal-name'>
        <h2>{deal.dealName}</h2>
      </div>
      <div className='deal-items'>
        <p>{deal.item1}</p>
      </div>
      <div className='deal-order'>
        <strong>{deal.price}</strong>
        <AiOutlinePhone>For Order</AiOutlinePhone>
      </div>
    </div>

  )
}
