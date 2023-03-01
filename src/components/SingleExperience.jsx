import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { FaPencilAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { ExperienceModal } from "./CustomModals";

const SingleExperience = ({ experience, updateExp }) => {
  // console.log(experience);
  const [showModal, setShowModal] = useState(false);
  const params = useParams();
  const handleShow = () => setShowModal(true);
  return (
    <>
      <Row className="mt-4 align-items-start">
        <Col xs={2}>
          {" "}
          <img src="http://via.placeholder.com/50x50" alt="" />{" "}
        </Col>
        <Col xs={8}>
          <div>
            <h5>{experience.role}</h5>
            <p>
              {experience.company} <br />
              <span className="text-secondary">
                {experience.startDate.slice(0, 10)}
              </span>
            </p>
          </div>
          <p className="mt-2">{experience.description}</p>
        </Col>
        {params.profileID === "me" ? (
          <Col xs={2} className="justify-self-end">
            <Button variant="none" onClick={handleShow} className="p-0">
              <FaPencilAlt className="pencil fs-6 link-secondary" />
            </Button>
            <ExperienceModal
              showModal={showModal}
              setShowModal={setShowModal}
              experience={experience}
              userID={experience.user}
              updateExp={updateExp}
              edit={true}
            />
          </Col>
        ) : (
          <Col className="justify-self-end"></Col>
        )}
      </Row>
    </>
  );
};

export default SingleExperience;
