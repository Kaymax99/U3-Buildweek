import { Col } from "react-bootstrap";
import People from "./People";

const PeopleSection = ({ profileArray }) => {
  return (
    <Col xs={12} md={3} className={"mt-3"}>
      <h4>Persone che potresti conoscere</h4>
      <div className="d-flex flex-column m-2 mt-3">
        {profileArray.map((element, i) => (
          <People key={"people-" + i} singleProfile={element} />
        ))}
      </div>
    </Col>
  );
};

export default PeopleSection;
