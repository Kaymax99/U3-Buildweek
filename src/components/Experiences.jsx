import { BsPlusLg } from "react-icons/bs";
import SingleExperience from "./SingleExperience";

const Experiences = ({ experiences }) => {
  console.log(experiences);
  return (
    <>
      <div className="d-flex">
        <h4>Esperienze</h4>
        <div className="pencil-container mt-2 container-fluid">
          <BsPlusLg className="pencil fs-6 me-2" />
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
