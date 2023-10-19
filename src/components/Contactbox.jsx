
import { Container, Row } from 'react-bootstrap';
import Location from '../components/Location';
import Button from '../components/Button';

const Contactbox = () => {

    return (
        <section className='plater bgbody' id='platers'>
            <Container>
                <Row>
                    <h1 style={{ textAlign: "center", marginTop: "60px", marginBottom: "5px", color: "#ad4907", fontSize: "60px", fontWeight: "bold", fontFamily: "'Roboto', sans-serif" }}>
                        Location</h1>
                    <hr style={{ height: "9px", width: "100%", color: "gray", marginTop: "5px" }}></hr>
                    <Location />
                    <div className='row-1'></div>
                    <Row>
                        <div className="container-fluid col-md-10">
                            <div className="section-heading text-center" id='cb-2'>
                                <h2>Contact us</h2>
                            </div>
                            <div className="contact-info">
                                <div id="contact_form">
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-md-6" id='cb-1'>
                                                <label>Name<span className="required"></span></label>
                                                <input type="text" name="name" className="form-control input-field" required="" />
                                            </div>
                                            <div className="col-md-6" id='cb-1'>
                                                <label>Email Adress <span className="required"></span></label>
                                                <input type="email" name="email" className="form-control input-field" required="" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12" id='cb-1' >
                                                <label>Message<span className="required"></span></label>
                                                <textarea name="message" id="message" className="textarea-field form-control" rows="3"
                                                    required=""></textarea>
                                            </div>
                                        </div>
                                        <div id="cb-3" ><Button text={"Submit"} /></div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <div id="address-info">
                            <div className="col" id='info-1'>
                                <div class="card">
                                    <div class="card-content">
                                        <p class="card-title">Address
                                        </p>
                                        <p class="card-para">Dubai Road,Near Girls Comprehensive School Gulgasht,Multan.
                                        </p>
                                        <p className='card-para'>Phone Number
                                            +92 309 111 2276</p>
                                        <p class="card-title">Business Hours
                                        </p>
                                        <p className='card-para'>
                                            WeekDays: 4AM - 11PM <br />
                                            Weekends: 9AM - 11PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Row>
                    <div className="row-1"></div>
                    <div className="row-1"></div>
                    <div className="row-1"></div>
                </Row>
                

            </Container>
        </section>
    )
}

export default Contactbox;
