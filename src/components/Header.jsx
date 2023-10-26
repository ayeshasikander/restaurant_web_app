import React from 'react'
import Label from './Label'
import logo from '../assests/logo.png'

const Header = () => {
    return (

        <nav className="navbar1 navbar navbar-expand-lg" aria-label="Offcanvas navbar large" style={{ position: "fixed", top: "0", zIndex: "100", width: "100%" }}>
            <div className="container-fluid">
                <a className="navbar-brand text-light" href="/"><img className='logo' src={logo} alt="ZABIK" style={{ width: "130px", height: "50px", marginLeft: "45px" }} /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar1 offcanvas offcanvas-end text-bg-light" tabIndex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
                    <div className="offcanvas-header">
                        <a className="navbar-brand text-light" href="/"><img className='logo' src={logo} alt="ZABIK" style={{ width: "130px", height: "50px", marginLeft: "45px" }} /></a>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="link">
                                <a className="text-light nav-link active" aria-current="page" href="/"><Label text="Delicious" fontSize="20px" /></a>
                            </li>
                            <li className="link">
                                <a className="text-light nav-link active" aria-current="page" href="#service"><Label text="Services" fontSize="20px" /></a>
                            </li>
                            <li className="link">
                                <a className="text-light nav-link active" aria-current="page" href="/contact"><Label text="Contact Us" fontSize="20px" /></a>
                            </li>
                            <button className="btn">
                                <a href="tel:+92 309 111 2276">
                                    <span className="btn-text-one">Call Now</span>
                                    <span className="btn-text-two">Great!</span>
                                </a>
                            </button>
                        </ul>

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header
