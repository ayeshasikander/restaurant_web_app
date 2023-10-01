import React from 'react'
import Label from './Label'
const Deals = () => {
    return (
        <div className='bgbody'>
            <div className='text-center' style={{ fontFamily: "'Roboto', sans-serif" }}><Label text="Pizza Deals" fontSize="60px" color="#ad4907" /></div>

            <div className="row1">
                <div className='mainrow row1'>
                    <div className='box  m-4'>
                        <div className="mini1">
                            <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                            <h2 className="fw-normal">Pizza</h2>
                            <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
                            <p><a className="btn btn-secondary" href="/">View deals &raquo;</a></p>
                        </div>
                    </div>

                    <div className='box m-4'>
                        <div className="mini1">
                            <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                            <h2 className="fw-normal">Heading</h2>
                            <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
                            <p><a className="btn btn-secondary" href="/">View details &raquo;</a></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    )
}

export default Deals
