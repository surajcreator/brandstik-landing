import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {RxHamburgerMenu} from 'react-icons/rx';
import './Header.scss';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-white">
      <Container>
        <Navbar.Brand href="#home">
          <img src='/brandstik-logo.png' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto"> {/* Change me-auto to mr-auto */}
            <Nav.Link href="https://www.brandstik.com/products">Categories</Nav.Link>
            <Nav.Link href="https://www.brandstik.com/about-us">About us</Nav.Link>
            <Nav.Link href="https://www.brandstik.com/contact-us">Contact us</Nav.Link>
            <NavDropdown title={<RxHamburgerMenu />} id="collapsible-nav-dropdown">
              <NavDropdown.Item href="https://www.brandstik.com/products">Products</NavDropdown.Item>
              <NavDropdown.Item href="https://www.brandstik.com/collections">Themes</NavDropdown.Item>
              <NavDropdown.Item href="https://www.brandstik.com/brands">Brands</NavDropdown.Item>
              <NavDropdown.Item href="https://blog.brandstik.com">Blog</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header