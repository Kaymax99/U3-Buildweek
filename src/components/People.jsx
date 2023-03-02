import { Button, Col, Row } from "react-bootstrap";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const People = ({ singleProfile }) => {
  const navigate = useNavigate();
  return (
    <>
      <Row className="person mt-3 mx-3">
        <Col xs={3} className="text-center px-0">
          <img
            src={singleProfile.image}
            alt="people_img"
            className="people_img"
          />
        </Col>
        <Col xs={9} className="px-0">
          <Link to={`/` + singleProfile._id}>
            <h5>{singleProfile.name} </h5>
          </Link>
          <p className="mb-1">{singleProfile.title}</p>
          <Button variant="outline-secondary rounded-pill px-3 py-1 mb-3">
            {<BsFillPersonPlusFill className="mb-1 me-2 collegati" />}
            <span className="fw-semibold fs-7">Collegati</span>
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default People;
