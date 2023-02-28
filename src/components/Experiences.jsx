import { useState } from "react";
import { Button } from "react-bootstrap";
import { BsPlusLg } from "react-icons/bs";
import { ExperienceModal } from "./CustomModals";
import SingleExperience from "./SingleExperience";

const Experiences = ({ experiences, retrieveData }) => {
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  return (
    <>
      <div className="d-flex">
        <h4>Esperienze</h4>
        <div className="add-container mt-2 container-fluid">
          <div>
            <Button variant="none" onClick={handleShow} className="p-0">
              <BsPlusLg className="pencil fs-6 add-icon" />
            </Button>
          </div>
          <ExperienceModal
            showModal={showModal}
            setShowModal={setShowModal}
            experience={""}
            userID={experiences.user}
            retrieveData={retrieveData}
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
