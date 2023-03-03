import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { FaPencilAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { formatDate } from "../hooks/formatDate";
import { ExperienceModal } from "./CustomModals";

const SingleExperience = ({ experience, updateExp }) => {
  // console.log(experience);
  const [showModal, setShowModal] = useState(false);
  const params = useParams();
  const handleShow = () => setShowModal(true);
  return (
    <>
      <Row className="mt-4 align-items-start experience mx-1 position-relative">
        <Col xs={3} sm={2} className="ps-md-3 pe-md-0">
          {" "}
          <img src="http://via.placeholder.com/50x50" alt="" />{" "}
        </Col>
        <Col xs={9} sm={10}>
          <div>
            <h5>{experience.role}</h5>
            <p>
              {experience.company} <br />
              <span className="text-secondary">
                {experience?.startDate &&
                  formatDate(experience?.startDate.slice(0, 10))}{" "}
                {experience.endDate
                  ? "- " + formatDate(experience.endDate.slice(0, 10))
                  : ""}
                <br />
                {experience.area}
              </span>
            </p>
          </div>
          <p className="mt-2">{experience.description}</p>
        </Col>
        {params.profileID === "me" ? (
          <Col xs={1} className="editBtn text-center">
            <Button variant="none" onClick={handleShow}>
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
