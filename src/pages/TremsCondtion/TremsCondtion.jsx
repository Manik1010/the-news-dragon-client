import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TremsCondtion = () => {
    return (
        <Container>
            <h2>Terams And Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur dolorum libero, voluptate harum, ullam blanditiis soluta pariatur distinctio quos
                praesentium recusandae laborum consectetur, labore provident. Reiciendis, praesentium. Cum,
                impedit nemo!</p>
            <p>Go Back To <Link to="/register">Register</Link></p>

        </Container>
    );
};

export default TremsCondtion;