import { Button, Col, Row } from "react-bootstrap";
import { BsFillPersonPlusFill } from "react-icons/bs";

const PeopleSection = () => {
  return (
    <Col xs={12} md={3}>
      <h4>Persone che potresti conoscere</h4>
      <div className="d-flex flex-column m-2 mt-3">
        <Row>
          <Col xs={2}>
            <img
              src="https://via.placeholder.com/50"
              alt="people_img"
              className="people_img"
            />
          </Col>
          <Col xs={8} className="mx-3">
            <h5>$Name </h5>
            <p>$Title</p>
            <Button variant="outline-secondary rounded-pill px-3">
              {<BsFillPersonPlusFill className="mb-1 me-2" />}
              Collegati
            </Button>
          </Col>
        </Row>
        <hr className="align-self-center" style={{ width: "90%" }} />
      </div>
    </Col>
  );
};

export default PeopleSection;
