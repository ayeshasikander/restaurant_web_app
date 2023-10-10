
import { Container, Row } from 'react-bootstrap';
import Location from '../components/Location';

const Contactbox = () => {

    return (
        <section className='plater bgbody' id='platers'>
            <Container>
                <Row>
                    <h1 style={{ textAlign: "center", marginTop: "60px", marginBottom: "5px", color: "#ad4907", fontSize: "60px", fontWeight: "bold", fontFamily: "'Roboto', sans-serif" }}>
                        Dine Delights Specials</h1>
                    <hr style={{ height: "9px", width: "100%", color: "gray", marginTop: "5px" }}></hr>
                    <Location />
                    <div className="" style={{ marginBottom: "400px" }}>
                        <div class="col-md-8 col-md-offset-1">
                            <div class="section-heading">
                                <h2>Contact us</h2>
                            </div>
                            <div class="contact-info">
                                <div id="contact_form">
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Name<span class="required">*</span></label>
                                                <input type="text" name="name" class="form-control input-field" required=""/>
                                            </div>
                                            <div class="col-md-6">
                                                <label>Email Adress <span class="required">*</span></label>
                                                <input type="email" name="email" class="form-control input-field" required=""/>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <label>Subject</label>
                                                <input type="text" name="subject" class="form-control input-field"/>
                                            </div>
                                            <div class="col-md-12">
                                                <label>Message<span class="required">*</span></label>
                                                <textarea name="message" id="message" class="textarea-field form-control" rows="3"
                                                    required=""></textarea>
                                            </div>
                                        </div>
                                        <button type="submit" id="submit_btn" value="Submit" class="btn btn-primary">Send
                                            message</button>
                                    </div>
                                    <div id="contact_results"></div>
                                </div>
                            </div>
                        </div>

                    </div>

                </Row>

            </Container>
        </section>
    )
}

export default Contactbox;
