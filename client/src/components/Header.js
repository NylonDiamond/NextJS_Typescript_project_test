import Link from "next/link";
import Head from "next/head";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
const linkStyle = {
  marginRight: 15,
  color: "red",
  float: "left"
};

const Header = () => (
  <div>
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">My Test App 🌮️</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link href="/">
                <a style={linkStyle}>Homepage</a>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link href="/pizzaReview">
                <a style={linkStyle}>Pizza</a>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link href="/translate">
                <a style={linkStyle}>Translate</a>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link href="/map">
                <a style={linkStyle}>Map</a>
              </Link>
            </Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
    {/* <style jsx>{`
      .nav-scroller {
        position: relative;
        z-index: 2;
        height: 2.75rem;
        overflow-y: hidden;
      }
      .pb-1,
      .py-1 {
        padding-bottom: 0.25rem !important;
      }

      .pt-1,
      .py-1 {
        padding-top: 0.25rem !important;
      }
      .mb-2,
      .my-2 {
        margin-bottom: 0.5rem !important;
      }
      *,
      ::after,
      ::before {
        box-sizing: border-box;
      }
      ,
      .nav-scroller .nav {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
        padding-bottom: 1rem;
        margin-top: -1px;
        overflow-x: auto;
        text-align: center;
        white-space: nowrap;
        -webkit-overflow-scrolling: touch;
      }
      .justify-content-between {
        -webkit-box-pack: justify !important;
        -ms-flex-pack: justify !important;
        justify-content: space-between !important;
      }
      .d-flex {
        display: -webkit-box !important;
        display: -ms-flexbox !important;
        display: flex !important;
      }
      .nav {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        padding-left: 0;
        margin-bottom: 0;
        list-style: none;
      }
      ,
      .text-muted {
        color: #6c757d !important;
      }
      .p-2 {
        padding: 0.5rem !important;
      }
      a {
        color: #007bff;
        text-decoration: none;
        background-color: transparent;
        -webkit-text-decoration-skip: objects;
      }
      *,
      ::after,
      ::before {
        box-sizing: border-box;
      }
      user agent stylesheet a:-webkit-any-link {
        color: -webkit-link;
        cursor: pointer;
        text-decoration: underline;
      }
    `}</style> */}
  </div>
);

export default Header;
