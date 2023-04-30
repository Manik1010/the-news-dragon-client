import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { FaRegUserCircle } from 'react-icons/fa'
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {
    const { user, logOut } = useContext((AuthContext))
    // console.log(user.displayName);

    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            {/* <Nav.Link > */}
                            <Link to="/">Home</Link>
                            {/* </Nav.Link> */}

                            <Link to="/about">About</Link>


                            <Link to="/criear">Criear</Link>

                        </Nav>
                        <Nav>
                            {user && <Nav.Link><FaRegUserCircle style={{ fontSize: '2rem' }}></FaRegUserCircle>Profile</Nav.Link>}

                            {user ?
                                <Button onClick={handleLogout} variant="secondary">LogOut</Button> :
                                // <Button to="/login" variant="secondary">Login</Button>
                                <Link to="/login">
                                    <Button variant="secondary">Login</Button>
                                </Link>

                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Container>
    );
};

export default NavigationBar;