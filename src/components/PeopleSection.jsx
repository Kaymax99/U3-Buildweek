import { Col, Row } from "react-bootstrap";

const PeopleSection = () => {
  return (
    <Col xs={12} md={4}>
      <h2>Persone che potresti conoscere</h2>
      <div>
        <Row>
          <Col xs={2}>
            <img
              src="https://via.placeholder.com/100"
              alt="people_img"
              className="people_img"
            />
          </Col>
          <Col xs={10}></Col>
        </Row>
        <hr />
      </div>
    </Col>
  );
};

export default PeopleSection;
