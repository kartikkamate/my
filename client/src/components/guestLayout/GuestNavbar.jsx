import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from "../../Assets/Logo.png"
export const GuestNavbar = () => {
    return (
        <>
            <style>
                {`
                .navbarStyle {
                    transition: all 0.4s ease;
                }
                .brandStyle {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                }
                .textAnimationStyle {
                    font-size: 28px;
                    font-weight: bold;
                    margin-left: 27px;  
                    transition: transform 0.4s ease;
                }
                .textAnimationStyle:hover {
                    transform: scale(1.2);
                }
                .eventStyle {
                    padding-right: 20px;
                    font-size: 32px;
                    font-family: Bodoni Moda;
                    color: #fff533;
                    padding: 0 5px;
                }
                .managementStyle {
                    color: #ff3333;
                    padding: 0 5px;
                }
                .navItemStyle {
                    font-size: 25px;
                    padding: 15px;
                    transition: all 0.4s ease;
                }
                .navbar:hover {
                    background-color: #ddf6f0;
                }
                .navbar .nav-item:hover {
                    color: #ff1414;
                    transform: scale(1.1);
                }
                .zoomEffect {
                    transition: transform 0.4s ease;
                }
                .zoomEffect:hover {
                    transform: scale(1.8);
                }
                @media (max-width: 992px) {
                    .navbar-brand span {
                        font-size: 25px;
                    }
                    .navbar .nav-item {
                        font-size: 18px;
                    }
                }
                @media (max-width: 576px) {
                    .navbar-brand span {
                        font-size: 18px;
                    }
                    .navbar .nav-item {
                        font-size: 12px;
                    }
                }
                `}
            </style>
            <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark" className="custom-navbar navbarStyle">
                <Container>
                    <Navbar.Brand as={NavLink} to="/home" className="navbar-brand brandStyle">
                        <img
                            src={logo}
                            alt="CampusHub Logo"
                            className="zoomEffect"
                            style={{
                                width: '80px',
                                height: 'auto',
                                borderRadius: "90px"
                            }}
                        />
                        <span className='textAnimationStyle'>
                            <span className='eventStyle'>Campus</span>
                            <span className='managementStyle'>Hub</span>
                        </span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" aria-label="Toggle navigation" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={NavLink} to="/home" className="nav-item navItemStyle" >Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/about" className="nav-item navItemStyle" >About</Nav.Link>
                            <Nav.Link as={NavLink} to="/services" className="nav-item navItemStyle" >Services</Nav.Link>
                            <Nav.Link as={NavLink} to="/contact" className="nav-item navItemStyle" >Contact</Nav.Link>
                            <Nav.Link as={NavLink} to="/register" className="nav-item navItemStyle" >Register</Nav.Link>
                            <Nav.Link as={NavLink} to="/login" className="nav-item navItemStyle" >Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default GuestNavbar;