import { Col, Dropdown, Form, Nav, Row } from "react-bootstrap";
import logoBig from "../assets/imgs/linkedin.svg";
import { QuestionCircleFill, GearFill } from "react-bootstrap-icons";

export const CustomFooter = () => {
  return (
    <footer className="py-5 text-muted">
      <img src={logoBig} alt="logo" className="logo mb-2" />
      <Row>
        <Col xs={7} md={6}>
          <Row>
            <Col xs={4} className="mb-3">
              <Nav className="flex-column">
                <Nav.Item className="mb-2">
                  <Nav.Link href="#" className="p-0 text-muted">
                    About
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-2">
                  <Nav.Link href="#" className="p-0 text-muted">
                    Community Guidelines
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-2">
                  <Nav.Link href="#" className="p-0 text-muted">
                    Privacy & Terms
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-2">
                  <Nav.Link href="#" className="p-0 text-muted">
                    Sales Solutions
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-2">
                  <Nav.Link href="#" className="p-0 text-muted">
                    Safety Center
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>

            <Col xs={4} className="mb-3">
              <Nav className="flex-column">
                <Nav.Item className="mb-2">
                  <Nav.Link href="#" className="p-0 text-muted">
                    Accessibility
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-2">
                  <Nav.Link href="#" className="p-0 text-muted">
                    Careers
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-2">
                  <Nav.Link href="#" className="p-0 text-muted">
                    Ad Choices
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-2">
                  <Nav.Link href="#" className="p-0 text-muted">
                    Mobile
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>

            <Col xs={4} className="mb-3">
              <Nav className="flex-column">
                <Nav.Item className="mb-2">
                  <Nav.Link href="#" className="p-0 text-muted">
                    Talent Solutions
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-2">
                  <Nav.Link href="#" className="p-0 text-muted">
                    Marketing Solutions
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-2">
                  <Nav.Link href="#" className="p-0 text-muted">
                    Advertising
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-2">
                  <Nav.Link href="#" className="p-0 text-muted">
                    Small Business
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
        </Col>

        <Col xs={5} md={6} className="mb-3">
          <Row>
            <Col xs={12} md={6}>
              <ul>
                <li className="d-flex">
                  <div>
                    <QuestionCircleFill className="footerIcon" />
                  </div>
                  <span>
                    <a className="fw-bold">Questions?</a>
                    <p className="fs-7">Visit our Help Center</p>
                  </span>
                </li>
                <li className="d-flex">
                  <div>
                    <GearFill className="footerIcon" />
                  </div>
                  <span>
                    <a className="fw-bold">Manage your account and privacy</a>
                    <p className="fs-7">Go to your Settings</p>
                  </span>
                </li>
              </ul>
            </Col>
            <Col xs={12} md={6}>
              <Dropdown>
                <p className="m-0">Select Language</p>
                <Dropdown.Toggle
                  variant="none"
                  id="dropdown-basic"
                  className="border"
                >
                  English (English)
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>English (English)</Dropdown.Item>
                  <Dropdown.Item>Italiano (Italian)</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        </Col>
      </Row>

      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p>© 2022 Company, Inc. All rights reserved.</p>
        <ul className="list-unstyled d-flex">
          <li className="ms-3">
            <a className="link-dark" href="#">
              <svg className="bi" width="24" height="24">
                <use href="#twitter"></use>
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="link-dark" href="#">
              <svg className="bi" width="24" height="24">
                <use href="#instagram"></use>
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="link-dark" href="#">
              <svg className="bi" width="24" height="24">
                <use href="#facebook"></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
