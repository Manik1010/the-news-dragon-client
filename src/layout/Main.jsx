import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import RightNab from '../pages/Shared/RightNab/rightNab';
import LeftNab from '../pages/Shared/LeftNab/leftNab';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Container>
                {/* <Row>
                    <Col sm={8}>sm=8</Col>
                    <Col sm={4}>sm=4</Col>
                </Row> */}
                <Row>
                    {/* <Col lg={3}>sm=true</Col>
                    <Col lg={6}>sm=true</Col>
                    <Col lg={3}>sm=true</Col> */}
                    <Col lg={3}>

                        {/* Left */}
                        <LeftNab></LeftNab>

                    </Col>
                    <Col lg={6}>
                        {/* <h2>Main contain is comin...</h2> */}
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNab></RightNab>
                    </Col>
                </Row>
            </Container>
            <Outlet></Outlet>

            <Footer></Footer>

        </div>
    );
};

export default Main;