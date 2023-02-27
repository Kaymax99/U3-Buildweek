import { Container, Row } from "react-bootstrap";
import InfoSection from "./InfoSection";
import PeopleSection from "./PeopleSection";

export const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <InfoSection />
          <PeopleSection />
        </Row>
      </Container>
    </>
  );
};
