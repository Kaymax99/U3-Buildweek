import { Container, Row, Col } from "react-bootstrap";
import HomeProfileCard from "./HomeComponents/HomeProfileCard";
import HomeCentralNewCard from "./HomeComponents/HomeCentralNewCard";

import CreaUnPost from "./HomeComponents/CreaUnPost";

export const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={3}>
            <Row>
              <HomeProfileCard />
            </Row>
          </Col>

          <Col xs={5}>
            <Row>
              <CreaUnPost />
            </Row>
            <Row>
              <hr />
            </Row>
            <Row>
              <HomeCentralNewCard />
            </Row>
          </Col>
        </Row>
        <Col xs={4}>
          <Row></Row>
        </Col>
      </Container>
    </>
  );
};
