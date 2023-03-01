import { Col, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import People from "./People";

const PeopleSection = () => {
  const peopleArray = useSelector((state) => state.people.content);
  const profileArray = peopleArray.slice(0, 5);
  return (
    <Col
      xs={12}
      md={4}
      className={"mt-3"}
      style={{ backgroundColor: "white", borderRadius: "15px" }}
    >
      <h4>Persone che potresti conoscere</h4>
      <Container>
        {profileArray.map((element, i) => (
          <People key={"people-" + i} singleProfile={element} />
        ))}
      </Container>
    </Col>
  );
};

export default PeopleSection;
