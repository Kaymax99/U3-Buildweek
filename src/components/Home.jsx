import { Container, Row, Col } from "react-bootstrap";
import HomeProfileCard from "./HomeComponents/HomeProfileCard";

import PostLinkedin from "./HomeComponents/PostLinkedin";

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
              <PostLinkedin />
            </Row>
          </Col>
        </Row>
        <Col xs={3} md={12}>
          <Row></Row>
        </Col>
      </Container>
    </>
  );
};
