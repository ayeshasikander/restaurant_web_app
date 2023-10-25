import React from 'react';
import serv from '../data/serv';
const Service = () => {
    return (
        <div className="services bgbody-1 container-fluid" id='service'>

            <div className="row" id='row-1'>
                <div className="row-1"></div>
                <h1 id='head'>Our Services</h1>
                <hr style={{ height: "9px", width: "100%", color: "gray", marginTop: "5px" }}></hr>
                {
                    serv.map(x => (
                        <div className="col-md-2" id='sr-sec' key={x.id}>
                            <img className='sr-img' src={x.image} alt="sevices" />
                            <h3 className="fw-normal">{x.title}</h3>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Service
