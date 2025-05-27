import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Navbar fixed="bottom" expand="sm" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          &copy;ChurchCreations
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/resources/AllResources">
              Take me to the juice
            </Nav.Link>
            <Nav.Link as={Link} to="/Audit">
              Reset the Matrix
            </Nav.Link>
            <Nav.Link as={Link} to="/AboutMe">
              About Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Footer;
