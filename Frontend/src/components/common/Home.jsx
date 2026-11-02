
import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Home = () => {
  return (
    <>
      <header className="shadow">
        <div className="bg-dark text-white p-3 text-center">
          <span className="text-white">Your wallpaper partner</span>
        </div>

        <div className="container">
          <Navbar expand="lg" className="bg-body-tertiary">
            <Navbar.Brand href="#">Wallpaper Homes Kenya</Navbar.Brand>

            <Navbar.Toggle aria-controls="navbarScroll" />

            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0">
                <Nav.Link href="#soft-wallpaper">Soft wallpaper</Nav.Link>
                <Nav.Link href="#flowered">Flowered</Nav.Link>
                <Nav.Link href="#textured">Textured</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </header>
    </>
  )
}

export default Home
