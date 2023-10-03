import React, { useState } from 'react';
import Card from './Card';
import { Container, Row } from 'react-bootstrap';
import Category from './Category';
import Data from '../data/content';

const allSelections = ['all', ...new Set(Data.map((item) => item.category))];

const Menu = () => {
    const [menuItem, setMenuItem] = useState(Data);
    const [title] = useState(allSelections);

    const filterItem = (category) => {
        if (category === 'all') {
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
                    <Category filterItem={filterItem} title={title}/>
                    <h3 style={{ fontSize: "30px", textAlign: "center", color: "#ad4907", fontFamily: "'Roboto', sans-serif", fontWeight: "bold", marginTop: "50px", marginBottom: "50px" }}>Zabik Special Deals</h3>
                    <Card menuX={menuItem} />
                </Row>
            </Container>
        </section>
    );
};

export default Menu;
