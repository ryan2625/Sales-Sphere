import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ShippingModal from './ShippingModal';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Logo from './Logo.png';
import "../../styles/Navbar.css"

let expand = 'lg';

function Navbar1() {
  return (
    <div className="nav-container">
        <ShippingModal />
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3" id="main-navbar">
          <Container fluid>
            <Navbar.Brand href="#"><img src={Logo} alt="" id="logo-nav"/></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} 
             style={{ backgroundColor: '#ffffff' }} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Navigation
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3" id="nav-links">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <NavDropdown
                    title="Products"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Men</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action4">
                      Women
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action4">
                      Unisex
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#action2"><ShoppingCartIcon /></Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="light">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </div>
  );
}

export default Navbar1;