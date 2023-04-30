import React from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {

    const { signInUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const location = useLocation();
    console.log('Login page location: ',location);

    // const frm = location.state?.from?.pathname || '/catagoriy/0'
    // const from = location.state?.from?.pathname || "/catagoriy/0";
    const from = location.state?.from?.pathname || "/catagoriy/0";

    const handelLogin = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        // signInUser( email, password)
        signInUser(email, password)
            .then((userCredential) => {
                // Signed in 
                const logUser = userCredential.user;
                console.log(logUser);
                //move home page ........................
                // navigate('/catagoriy/0')
                navigate(from, { replace: true });
                // ...
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });

    }

    return (
        <Container className='w-50 mx-auto'>
            <h3>Please Login</h3>
            <Form onSubmit={handelLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>



                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Don't have an account?<Link to={"/register"}> Register</Link >
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;