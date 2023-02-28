import { Col, Row } from "react-bootstrap";
import { FaPencilAlt } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";

const SingleExperience = ({ e }) => {
  return (
    <>
      <Row className="mt-4 align-items-start">
        <Col xs={2}>
          {" "}
          <img src="http://via.placeholder.com/50x50" alt="" />{" "}
        </Col>
        <Col xs={8}>
          <div>
            <h5>{e.role}</h5>
            <p>
              {e.company} <br />
              <span className="text-secondary">{e.startDate}</span>
            </p>
          </div>
          <p className="mt-2">{e.decription}</p>
        </Col>
        <Col xs={2}>
          <div className="d-flex experience-icons">
            <div className="pencil-container mt-2 container-fluid">
              <div>
                <BsPlusLg className="pencil fs-6" />
              </div>
            </div>
            <div className="pencil-container mt-2 container-fluid">
              <div>
                <FaPencilAlt className="pencil fs-6" />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default SingleExperience;
