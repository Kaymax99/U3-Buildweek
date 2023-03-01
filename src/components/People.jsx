import { Button, Col, Row } from "react-bootstrap";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const People = ({ singleProfile }) => {
  const navigate = useNavigate();
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
        <Col xs={8} className="mx-1">
          <Link to={`/` + singleProfile._id}>
            <h5>{singleProfile.name} </h5>
          </Link>
          <p>{singleProfile.title}</p>
          <Button variant="outline-secondary rounded-pill px-3">
            {<BsFillPersonPlusFill className="mb-1 me-2 collegati" />}
            Collegati
          </Button>
        </Col>
      </Row>
      <div className="d-flex justify-content-center">
        <hr style={{ width: "90%" }} />
      </div>
    </>
  );
};

export default People;
