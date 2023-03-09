import { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  Form,
  FormControl,
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
import { Link, useNavigate } from "react-router-dom";

import logo from "../assets/imgs/logo.svg";
import pic from "../assets/imgs/unregistered.png";

export const CustomNavbar = () => {
  const navigate = useNavigate();
  const profile = useSelector((state) => state.profile.content);
  const [query, setQuery] = useState("");

  const handleChange = (value) => {
    setQuery(value);
  };

  return (
    <>
      <Navbar bg="white" className="py-0 border-bottom" fixed="top">
        <Container className="px-0">
          <Nav
            className="me-auto my-lg-0 align-items-center w-100"
            style={{ maxHeight: "100px" }}
          >
            <Col xs={1} lg={3} className="d-flex justify-content-center ps-2">
              <Link to={"/"}>
                <img src={logo} alt="logo" className="logo me-lg-3"></img>
              </Link>
              <Form
                className="d-none d-lg-block"
                onSubmit={(e) => {
                  e.preventDefault();
                  navigate("/jobs/" + query);
                  setQuery("");
                }}
              >
                <Form.Control
                  type="search"
                  placeholder="Search a job"
                  className="me-2 ps-4 py-0 search"
                  value={query}
                  aria-label="Search a job"
                  onChange={(e) => {
                    handleChange(e.target.value);
                  }}
                />
              </Form>
            </Col>
            <Col xs={11} lg={9}>
              <Row className="align-items-center w-100 mx-0">
                <Col className="d-flex justify-content-center d-lg-none px-0">
                  <Button
                    variant="none m-0"
                    className="d-flex flex-column align-items-center p-0"
                    onClick={() => {
                      let largeSearch = document.getElementById("searchLG");
                      largeSearch.classList.toggle("showSearch");
                    }}
                  >
                    <Search className="navIcon" />
                    <span className="navSpan">Search</span>
                  </Button>
                </Col>
                <Col className="px-0">
                  <Link
                    to={"/"}
                    className="d-flex nav-link flex-column align-items-center p-0"
                  >
                    <HouseDoorFill className="navIcon" />
                    <span className="navSpan">Home</span>
                  </Link>
                </Col>
                <Col className="px-0">
                  <Link
                    to="/my-network"
                    className="d-flex nav-link flex-column align-items-center p-0"
                  >
                    <PeopleFill className="navIcon" />
                    <span className="navSpan">My Network</span>
                  </Link>
                </Col>
                <Col className="px-0">
                  <Link
                    to={"/jobs"}
                    className="d-flex nav-link flex-column align-items-center p-0"
                  >
                    <BriefcaseFill className="navIcon" />
                    <span className="navSpan">Jobs</span>
                  </Link>
                </Col>
                <Col className="px-0">
                  <Link
                    to={"/"}
                    className="d-flex nav-link flex-column align-items-center p-0"
                  >
                    <ChatDotsFill className="navIcon" />
                    <span className="navSpan">Messaging</span>
                  </Link>
                </Col>
                <Col className="px-0">
                  <Link
                    to={"/"}
                    className="d-flex nav-link flex-column align-items-center p-0"
                  >
                    <BellFill className="navIcon" />
                    <span className="navSpan">Notifications</span>
                  </Link>
                </Col>
                <Col className="border-end px-0">
                  <Dropdown
                    href="#"
                    id="dd"
                    className="d-flex justify-content-center"
                  >
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
                          onClick={() => {
                            navigate("/me");
                            document.getElementById("dd").click(); // Chiudi il dropdown
                          }}
                        >
                          View Profile
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
                          <Link to={"/"}>
                            <li>Posts & Activity</li>
                          </Link>
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
                <Col className="d-none d-sm-block px-0">
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
      <Navbar id="searchLG" fixed="top" className="subNavSearch d-lg-none">
        <Container className="px-0">
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              navigate("/jobs/" + query);
              setQuery("");
              let largeSearch = document.getElementById("searchLG");
              largeSearch.classList.remove("showSearch ");
            }}
          >
            <FormControl
              className="py-1"
              type="text"
              as="input"
              placeholder="Search a job"
              rows="1"
              value={query}
              onChange={(e) => {
                handleChange(e.target.value);
              }}
            />
          </Form>
        </Container>
      </Navbar>
    </>
  );
};
