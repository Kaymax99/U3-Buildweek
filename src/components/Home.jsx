import { Container, Row } from "react-bootstrap";
import HomeProfileCard from "./HomeComponents/HomeProfileCard";

export const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <HomeProfileCard />
        </Row>
      </Container>
    </>
  );
};
