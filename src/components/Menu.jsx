import React from 'react'
import Button from './Button'
import Card from './Card'
import { Container, Row } from 'react-bootstrap'
const Menu = () => {

    return (
        <section className='menu bgbody' id='menus'>
            <Container>
                <Row>
                    <h1 style={{textAlign:"center",marginTop:"60px",marginBottom:"5px",color:"#ad4907",fontSize:"60px",fontWeight:"bold",fontFamily:"'Roboto', sans-serif"}}>Our Menu Pack</h1>
                    <div className='text-center flex-wrap' style={{ borderBottom: "1px solid #38312c" }}>
                        <Button text="Pizza" />
                        <Button text="Burgers" />
                        <Button text="Fries" />
                        <Button text="Pasta" />
                        <Button text="Rolls & Wrap" />
                        <Button text="Side Orders" />
                        <Button text="Drinks" />
                    </div>
                    <h3 style={{fontSize:"30px",textAlign:"center",color:"#ad4907",fontFamily:"'Roboto', sans-serif",fontWeight:"bold",marginTop:"30px"}}>Zabik Special Deals</h3>
                    <div className="row1">
                        <div className='mainrow row1'>
                            
                               <Card></Card>
                           

                            {/* <div className='box m-4'>
                                <div className="mini1">
                                    <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                                    <h2 className="fw-normal">Heading</h2>
                                    <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
                                    <p><a className="btn btn-secondary" href="/">View details &raquo;</a></p>
                                </div>
                            </div> */}


                        </div>
                    </div>

                </Row>
            </Container>
        </section>
    )
}

export default Menu
