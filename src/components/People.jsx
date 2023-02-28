import { Button, Col, Row } from "react-bootstrap";
import { BsFillPersonPlusFill } from "react-icons/bs";

const People = ({ singleProfile }) => {
  return (
    <>
      <Row>
        <Col xs={2}>
          <img
            src={singleProfile.image}
            alt="people_img"
            className="people_img"
          />
        </Col>
        <Col xs={8} className="mx-3">
          <h5>{singleProfile.name} </h5>
          <p>{singleProfile.title}</p>
          <Button variant="outline-secondary rounded-pill px-3">
            {<BsFillPersonPlusFill className="mb-1 me-2" />}
            Collegati
          </Button>
        </Col>
      </Row>
      <hr className="align-self-center" style={{ width: "90%" }} />
    </>
  );
};

export default People;
