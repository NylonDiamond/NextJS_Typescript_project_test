import Link from "next/link";
import Head from "next/head";
import { Navbar, Nav } from "react-bootstrap";
import { CSSProperties } from "react";
const linkStyle: CSSProperties = {
  marginRight: 15,
  color: "red",
  float: "left"
};
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLanguage,
  faPizzaSlice,
  faHome,
  faMapMarkedAlt,
  faChalkboardTeacher
} from "@fortawesome/free-solid-svg-icons";

// https://github.com/zeit/next.js/tree/canary/examples/with-app-layout
const Header = () => (
  <div>
    <div>
      <Navbar
        style={{ backgroundColor: "#114B5F" }}
        expand="lg"
        className="navigationBar">
        <Link href="/">
          <Navbar.Brand style={{ color: "#F3E9D2" }}>
            My Test App <FontAwesomeIcon icon={faChalkboardTeacher} />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto justify-content-center">
            <Nav.Item>
              <Nav.Link>
                <Link href="/">
                  <span>
                    Homepage <FontAwesomeIcon icon={faHome} />
                  </span>
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link href="/pizzaReview">
                  <span>
                    Pizza <FontAwesomeIcon icon={faPizzaSlice} />
                  </span>
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link href="/Translate">
                  <span>
                    Translate <FontAwesomeIcon icon={faLanguage} />
                  </span>
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link href="/map">
                  <span>
                    Map <FontAwesomeIcon icon={faMapMarkedAlt} />
                  </span>
                </Link>
              </Nav.Link>
            </Nav.Item>
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
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Navbar>{" "}
      <style jsx>{`
        .nav:hover {
          color: red;
        }
      `}</style>
    </div>
  </div>
);

export default Header;
