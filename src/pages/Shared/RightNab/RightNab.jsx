import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';
import bg from '../../../assets/bg.png'

const RightNab = () => {
    return (
        <div>
            {/* <h2>Right NabBer.</h2> */}
            <h4>Login With</h4>
            <Button className='mb-2' variant="outline-primary"> <FaGoogle /> Login with Google</Button>
            <Button variant="outline-secondary"> <FaGithub /> Login with GitHUb</Button>
            <div>
                <h4 className='mt-4 mb-2'>Find us on</h4>
                <ListGroup> 
                    <ListGroup.Item> <FaFacebookF/>FaceBook</ListGroup.Item>
                    <ListGroup.Item> <FaTwitter/> Twiter</ListGroup.Item>
                    <ListGroup.Item> <FaInstagram/> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <Qzone></Qzone>
            <div>
                <img src={bg} alt="" />
                <div>
                    <h2>Create an Amazing Newspaper</h2>
                    <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button variant="danger">Larne More</Button>
                </div>
            </div>
        </div>
    );
};

export default RightNab;