import {
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  Form,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import {
  Search,
  HouseDoorFill,
  PeopleFill,
  BriefcaseFill,
  ChatDotsFill,
  BellFill,
  Grid3x3GapFill,
} from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import logo from "../assets/imgs/logo.svg";
import pic from "../assets/imgs/unregistered.png";

export const CustomNavbar = () => {
  const profile = useSelector((state) => state.profile.content);
  return (
    <Navbar bg="white" expand="sm" className="py-0">
      <Container fluid>
        <Nav
          className="me-auto my-lg-0 align-items-center w-100"
          style={{ maxHeight: "100px" }}
        >
          <Col xs={1} lg={3} className="d-flex justify-content-center">
            <Link to={"/"}>
              <img src={logo} alt="logo" className="logo me-lg-3"></img>
            </Link>
            <Form className="d-none d-lg-block">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 ps-4 py-0 search"
                aria-label="Search"
              />
            </Form>
          </Col>
          <Col xs={11} lg={9}>
            <Row className="align-items-center">
              <Col className="d-block d-lg-none">
                <Nav.Link
                  href="#action1"
                  className="d-flex flex-column align-items-center p-0"
                >
                  <Search className="navIcon" />
                  <span className="navSpan">Search</span>
                </Nav.Link>
              </Col>
              <Col>
                <Link
                  to={"/"}
                  className="d-flex nav-link flex-column align-items-center p-0"
                >
                  <HouseDoorFill className="navIcon" />
                  <span className="navSpan">Home</span>
                </Link>
              </Col>
              <Col>
                <Link
                  to={"/"}
                  className="d-flex nav-link flex-column align-items-center p-0"
                >
                  <PeopleFill className="navIcon" />
                  <span className="navSpan">My Network</span>
                </Link>
              </Col>
              <Col>
                <Link
                  to={"/"}
                  className="d-flex nav-link flex-column align-items-center p-0"
                >
                  <BriefcaseFill className="navIcon" />
                  <span className="navSpan">Jobs</span>
                </Link>
              </Col>
              <Col>
                <Link
                  to={"/"}
                  className="d-flex nav-link flex-column align-items-center p-0"
                >
                  <ChatDotsFill className="navIcon" />
                  <span className="navSpan">Messaging</span>
                </Link>
              </Col>
              <Col>
                <Link
                  to={"/"}
                  className="d-flex nav-link flex-column align-items-center p-0"
                >
                  <BellFill className="navIcon" />
                  <span className="navSpan">Notifications</span>
                </Link>
              </Col>
              <Col className="border-secondary border-end">
                <Dropdown href="#" className="d-flex justify-content-center">
                  <Dropdown.Toggle
                    variant="none"
                    id="dropdown-basic"
                    className="d-flex flex-column align-items-center"
                  >
                    <img
                      src={profile.image ? profile.image : pic}
                      alt="profile-XS"
                      className="profile-XS rounded-circle"
                    ></img>
                    <span className="navSpan profile">Me</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="pb-0 dropdown-menu-end">
                    <div className="border-bottom pb-2">
                      <Card className="d-flex flex-row px-2 border-0 mb-1">
                        <Card.Img
                          variant="top"
                          src={profile.image ? profile.image : pic}
                          className="profile-SM rounded-circle"
                        />
                        <Card.Body className="p-0 ps-2">
                          <Card.Title className="fs-6">
                            {profile.name}
                          </Card.Title>
                          <Card.Text>{profile.title}</Card.Text>
                        </Card.Body>
                      </Card>
                      <Button
                        variant="outline-primary"
                        className="rounded-pill mx-2 viewProfile py-0 fw-bold"
                      >
                        <Link to={"/me"}>View Profile</Link>
                      </Button>
                    </div>
                    <div className="p-3 py-2 border-bottom">
                      <h6>Account</h6>
                      <ul className="text-muted">
                        <a href="#">
                          <li>Settings & Privacy</li>
                        </a>
                        <a href="#">
                          <li>Help</li>
                        </a>
                        <a href="#">
                          <li>Language</li>
                        </a>
                      </ul>
                    </div>
                    <div className="p-3 py-2 border-bottom">
                      <h6>Manage</h6>
                      <ul className="text-muted">
                        <a href="#">
                          <li>Posts & Activity</li>
                        </a>
                        <a href="#">
                          <li>Job Posting Account</li>
                        </a>
                      </ul>
                    </div>
                    <div className="p-3 py-2 text-muted">
                      <a href="#">Sign Out</a>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col>
                <Nav.Link
                  href="#"
                  className="d-flex flex-column align-items-center"
                >
                  <Grid3x3GapFill className="navIcon" />
                  <span className="navSpan">Work</span>
                </Nav.Link>
              </Col>
            </Row>
          </Col>
        </Nav>
      </Container>
    </Navbar>
  );
};
