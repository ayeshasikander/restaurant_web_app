import { Container, Row } from 'react-bootstrap';
import specialDeal from '../data/deal';
import Deals from './Deals';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { Autoplay, Navigation, FreeMode,Pagination } from 'swiper/modules';

const Dealslider = (props) => {

    return (
        <section className='plater bgbody' id='platers'>
            <Container>
                <Row>
                    <h1 style={{ textAlign: "center", marginTop: "60px", marginBottom: "5px", color: "#ad4907", fontSize: "60px", fontWeight: "bold", fontFamily: "'Roboto', sans-serif" }}>
                        Dine Delights Specials</h1>
                    <hr style={{ height: "9px", width: "100%", color: "gray", marginTop: "5px" }}></hr>
                    <Swiper
                    slidesPerView={3}
                        spaceBetween={30}
                        freeMode={true}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                            bulletActiveClass: 'custom-bullet-active',
                            renderBullet: function (index, className) {
                                return '<span class="' + className + '" style="background-color: #ad4907;"></span>'; // Set the background color to your desired color
                            },
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation,FreeMode]}
                        className="mySwiper"
                    >
                        {specialDeal.map((deal) => (
                            <SwiperSlide key={deal.id}>
                                <Deals deal={deal} />
                            </SwiperSlide>
                        ))}

                    </Swiper>

                </Row>

            </Container>
        </section>
    )
}

export default Dealslider;