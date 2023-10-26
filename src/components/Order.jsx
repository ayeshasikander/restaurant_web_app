import React from 'react';
import { AiOutlinePhone } from 'react-icons/ai';
const Order = () => {
    return (
        <div>
            <div data-tooltip="Thank you" className="button-2">
                <div className="button2-wrapper">
                    <div className="text">Order Now</div>
                    <a href="tel:+92 309 111 2276"> <span className="icon">
                        <AiOutlinePhone />
                    </span></a>
                </div>
            </div>


        </div>
    )
}

export default Order
