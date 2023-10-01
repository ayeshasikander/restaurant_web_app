import React from 'react'
import Label from './Label'
const Header = () => {
    return (

        <nav className="navbar1 navbar navbar-expand-lg" aria-label="Offcanvas navbar large" style={{position:"fixed",top:"0",zIndex:"100",width:"100%"}}>
            <div className="container-fluid">
                <a className="navbar-brand text-light" href="/">Zabik</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar1 offcanvas offcanvas-end text-bg-light" tabIndex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title text-light" id="offcanvasNavbar2Label">Zabik</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="link">
                                <a className="text-light nav-link active" aria-current="page" href="/" style={{ fontFamily:"'Roboto', sans-serif" }}><Label text="Home" fontSize="20px"/></a>
                            </li>
                            <li className="link">
                                <a className="text-light nav-link active" aria-current="page" href="/" style={{ fontFamily:"'Roboto', sans-serif" }}><Label text="About Us" fontSize="20px"/></a>
                            </li>
                            <li className="link">
                                <a className="text-light nav-link active" aria-current="page" href="/" style={{ fontFamily:"'Roboto', sans-serif" }}><Label text="Services" fontSize="20px"/></a>
                            </li>
                            <li className="link">
                                <a className="text-light nav-link active" aria-current="page" href="/" style={{ fontFamily:"'Roboto', sans-serif" }}><Label text="Contact Us" fontSize="20px"/></a>
                            </li>
                            <button style={{ fontFamily:"'Roboto', sans-serif" }}>Call Us: (+92)309 111 2276</button>
                        </ul>

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header
