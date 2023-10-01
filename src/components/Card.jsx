import React from 'react'
import contentItem from '../data/content'
export default function Card(props) {

  return (
    <div className='mainrow row1'>
      {contentItem.map((x) => (
        <div className='m-4' key={x.id}>
          <div className='menu-img'>
            <img src={x.image} alt='pizza' />
            <div className='menu-content'>
              <h3>{x.itemName}</h3>
            </div>
            <div className='btn-group'>

            </div>
          </div>
        </div>
      ))}

    </div>

  )
}
