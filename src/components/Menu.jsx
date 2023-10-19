import React, { useState } from 'react';
import Card from './Card';
import { Container, Row } from 'react-bootstrap';
import Category from './Category';
import Data from '../data/content';
import Lottie from 'lottie-react';
import animationData from '../assests/Animation - 3.json';
const allSelections = ['All', ...new Set(Data.map((item) => item.category))];

const Menu = () => {
    const [menuItem, setMenuItem] = useState(Data);
    const [title] = useState(allSelections);

    const filterItem = (category) => {
        if (category === 'All') {
            return setMenuItem(Data);
        }
        const yCategory = Data.filter((item) => item.category === category)
        return setMenuItem(yCategory);
    }

    return (
        <section className='menu bgbody' id='menus'>
            <Container>
                <Row>
                    <h1 style={{ textAlign: "center", marginTop: "60px", marginBottom: "5px", color: "#ad4907", fontSize: "60px", fontWeight: "bold", fontFamily: "'Roboto', sans-serif" }}>Our Menu Pack</h1>
                    <Category filterItem={filterItem} title={title} />

                    <h3 style={{ fontSize: "30px", textAlign: "center", color: "#ad4907", fontFamily: "'Roboto', sans-serif", fontWeight: "bold", marginTop: "50px", marginBottom: "50px" }}>Zabik Special Deals</h3>
                    <Card className="card-container" menuX={menuItem} />
                </Row>
            </Container>
            <div id="slider" className='slids'>
                <div id='slid' className='slides'>
                    <Lottie style={{ width: "142px", height: "100px" }} animationData={animationData} />
                </div>
            </div>
        </section>
    );
};

export default Menu;
