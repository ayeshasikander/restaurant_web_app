import React from 'react'

const Button = ({ text }) => {
    return (
        <a href='/' className="c-button2 c-button2--gooey" >{text}
            <div className="c-button__blobs">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </a>
    )
}

export default Button
