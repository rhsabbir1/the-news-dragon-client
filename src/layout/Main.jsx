import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pags/Sharde/Header';
import Footer from '../pags/Sharde/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import Left from '../pags/Sharde/Left';
import RightSide from '../pags/Sharde/RightSide';

const Main = () => {
    return (
        <div>
            <Header></Header>

            <Container>
                <Row>
                    <Col lg={3}>
                        <Left></Left>
                    </Col>
                    <Col lg={6}>
                       <h1> Main content comming .....</h1>
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

export default Main;