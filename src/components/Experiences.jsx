import { useState } from "react";
import { Button } from "react-bootstrap";
import { BsPlusLg } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { ExperienceModal } from "./CustomModals";
import SingleExperience from "./SingleExperience";

const Experiences = ({ experiences, updateExp }) => {
  const params = useParams();
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  return (
    <>
      <div className="d-flex">
        <h4>Esperienza</h4>
        <div className="add-container container-fluid">
          {params.profileID === "me" ? (
            <>
              <Button variant="none" onClick={handleShow}>
                <BsPlusLg className="pencil fs-6 add-icon" />
              </Button>
              <ExperienceModal
                showModal={showModal}
                setShowModal={setShowModal}
                experience={""}
                userID={experiences.user}
                updateExp={updateExp}
                edit={false}
              />
            </>
          ) : (
            ""
          )}
        </div>
      </div>
      {experiences?.map(function (experience, i) {
        return (
          <SingleExperience
            key={"experience-" + i}
            experience={experience}
            updateExp={updateExp}
          />
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
