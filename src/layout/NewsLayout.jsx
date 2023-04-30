import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../pages/Shared/Header/Header';
import RightNab from '../pages/Shared/RightNab/rightNab';
import { Outlet } from 'react-router-dom';

const NewsLayout = () => {
    return (
        <div>
            <Header></Header>

            <Container>
                <Row>
                    <Col lg={9}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNab></RightNab>
                    </Col>
                </Row>
            </Container>
            <Outlet></Outlet>

        </div>
    );
};

export default NewsLayout;