import React from 'react'
import Lottie from 'lottie-react';
import animationData from '../assests/arrow.json';
export default function Dropdown() {
    return (
        <Lottie className='arrow-animation' style={{height:"128px"}} animationData={animationData} />
    )
}
