import SingleExperience from "./SingleExperience";

const Experiences = ({ experiences }) => {
  console.log(experiences);
  return (
    <>
      <h4>Esperienza</h4>
      {experiences.map(function (e, i) {
        return <SingleExperience key={"experience-" + i} e={e} />;
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
