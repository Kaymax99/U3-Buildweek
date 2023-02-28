import { useState } from "react";
import { Button } from "react-bootstrap";
import { BsPlusLg } from "react-icons/bs";
import { ExperienceModal } from "./CustomModals";
import SingleExperience from "./SingleExperience";

const Experiences = ({ experiences, fetchExp }) => {
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  return (
    <>
      <div className="d-flex">
        <h4>Esperienze</h4>
        <div className="pencil-container mt-2 container-fluid">
          <Button variant="none" onClick={handleShow} className="p-0">
            <BsPlusLg className="pencil fs-6 me-2" />
          </Button>
          <ExperienceModal
            showModal={showModal}
            setShowModal={setShowModal}
            experience={""}
            userID={experiences.user}
            fetchExp={fetchExp}
            edit={false}
          />
        </div>
      </div>
      {experiences.map(function (experience, i) {
        return (
          <SingleExperience key={"experience-" + i} experience={experience} />
        );
      })}
    </>
  );
};

export default Experiences;

// `<Row className="mt-4">
//         <Col xs={2}>
//           {" "}
//           <img src="http://via.placeholder.com/50x50" alt="" />{" "}
//         </Col>
//         <Col xs={10}>
//           <div>
//             <h5>${e.role}</h5>
//             <p>
//               $company <br />
//               <span className="text-secondary">$startDate</span>
//             </p>
//           </div>
//           <p className="mt-2">$decription</p>
//         </Col>
//       </Row>`;
