import logo from '../../../assets/logo.png'
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";



const Header = () => {


    return (
        // <div>
        <Container className='mt-4'>
            {/* Header */}
            <div className='text-center'>
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                {/* <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p> */}
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Letest</Button>
                <Marquee className='text-danger' speed={70}>
                    I can be a React component, multiple React components, or just some text.I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            {/* <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link >
                                <Link to="/">Home</Link>
                            </Nav.Link>
                            <Nav.Link >
                                <Link to="/about">About</Link>
                            </Nav.Link>
                            <Nav.Link >
                                <Link to="/criear">Criear</Link>
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            {user && <Nav.Link><FaRegUserCircle style={{ fontSize: '2rem' }}></FaRegUserCircle>Profile</Nav.Link>}
                            <Nav.Link eventKey={2} >
                                {user ?
                                    <Button to="/login" variant="secondary">Login Out</Button> :
                                    // <Button to="/login" variant="secondary">Login</Button>
                                    <Link to="/login">
                                        <Button  variant="secondary">Login</Button>
                                    </Link>

                                }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}
            {/* </div> */}
        </Container>
    );
};

export default Header;