import React from 'react'
import { Container, Row } from 'react-bootstrap'
export default function Deals() {
  return (
    <section className='plater bgbody' id='platers'>
      <Container>
        <Row>
          <h1 style={{ textAlign: "center", marginTop: "60px", marginBottom: "5px", color: "#ad4907", fontSize: "60px", fontWeight: "bold", fontFamily: "'Roboto', sans-serif" }}>
            Dine Delights Specials</h1>
          <hr style={{ height: "9px", width: "100%", color: "gray", marginTop: "5px" }}></hr>

        </Row>

      </Container>
    </section>
  )
}
