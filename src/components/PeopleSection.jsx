import { Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import People from "./People";
import { randomizeArray } from "../hooks/randomizeArray";

const PeopleSection = () => {
  const peopleArray = useSelector((state) => state.people.content);
  const profileArray = randomizeArray(peopleArray).slice(0, 5);
  return (
    <Col xs={12} md={4} className={"mt-3"}>
      <div className="profSection">
        <h5 className="mt-4 ps-3 mb-0">Persone che potresti conoscere</h5>
        {profileArray.map((element, i) => (
          <People key={"people-" + i} singleProfile={element} />
        ))}
      </div>
    </Col>
  );
};

export default PeopleSection;
