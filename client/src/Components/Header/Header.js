import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link, animateScroll as scroll } from "react-scroll";
import logo from '../../assets/Logo.png'
import './style.css'

const Header = () => {

  return (

    <Navbar bg="white" expand="lg" fixed="top" >

      <Navbar.Brand href="#home"><img src={logo} alt="Brand logo" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="mr-auto" defaultActiveKey="greeting" className="justify-content-end">
          <Nav.Item as="li"><Nav.Link eventKey="greeting"><Link to="greeting" smooth={true}
          >Home</Link></Nav.Link></Nav.Item>
          <Nav.Item as="li"><Nav.Link eventKey="products"><Link to="products" offset={-70}
            smooth={true}
          >Products</Link></Nav.Link> </Nav.Item>
          <Nav.Item as="li"> <Nav.Link eventKey="collection"><Link to="collection" offset={-70}
            smooth={true}
          >Collections</Link></Nav.Link></Nav.Item>
          <Nav.Item as="li"> <Nav.Link eventKey="email-section"><Link to="email-section" offset={-70}
            smooth={true}
          >Contact</Link></Nav.Link> </Nav.Item>
        </Nav>
      </Navbar.Collapse>

    </Navbar>

  )
}

export default Header


