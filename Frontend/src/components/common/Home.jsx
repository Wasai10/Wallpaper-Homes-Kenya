import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/logo.png'


const Home = () => {
  return (
    <>
      <header className='shadow'>
        <div className='bg-dark text-center py-3'>
          <span className='text-white'>Your fashion partner</span>
        </div>

        <div className='container'>
<Navbar expand="lg" className="bg-body-tertiary">
      
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Soft</Nav.Link>
            <Nav.Link href="#action2">Textured</Nav.Link>
            <Nav.Link href="#action2">Patterned</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
        </div>
      </header>
    </>
  )
}

export default Home