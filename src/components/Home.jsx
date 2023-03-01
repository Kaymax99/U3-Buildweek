import { Container, Row, Col } from "react-bootstrap";
import HomeProfileCard from "./HomeComponents/HomeProfileCard";
import HomeCentralNewCard from "./HomeComponents/HomeCentralNewCard";

export const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={3} md={6}>
            <Row>
              <HomeProfileCard />
            </Row>
          </Col>

          <Col xs={6} md={6}>
            <Row>
              <HomeCentralNewCard />
            </Row>
          </Col>
        </Row>
        <Col xs={3} md={12}></Col>
      </Container>
    </>
  );
};
