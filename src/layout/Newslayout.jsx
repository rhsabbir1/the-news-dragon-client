import React from 'react';
import Header from '../pags/Sharde/Header';
import Footer from '../pags/Sharde/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import Left from '../pags/Sharde/Left';
import RightSide from '../pags/Sharde/RightSide';
import { Outlet } from 'react-router-dom';

const Newslayout = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={9}>
                       <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightSide></RightSide>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Newslayout;