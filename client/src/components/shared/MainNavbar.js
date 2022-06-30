import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const MainNavbar = () => (
<>
<Navbar>
  <Container>
    <Navbar.Brand href="#home">DrAppts</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Nav.Link>
            <Link to='/'>
              Home
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/doctors'>
              Doctors
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/users'>
              Users
            </Link>
          </Nav.Link>
    </Navbar.Collapse>
  </Container>
</Navbar>
</>

)

export default MainNavbar;