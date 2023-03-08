import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import logoLinkedin from "../../assets/imgs/Linkedin-Logo-700x394.png";
import { InfoSquareFill } from "react-bootstrap-icons";
import { ChevronCompactDown, ChevronCompactUp } from "react-bootstrap-icons";
import { useState } from "react";
import SingleNews from "./SingleNews";

export const HomeRightCards = ({ titles }) => {
  const [otherNews, setOtherNews] = useState(false);
  const [newsParam, setNewsParam] = useState(5);

  return (
    <>
      <Container className="news-container rounded pb-2">
        <Row className="justify-content-between">
          <Col xs={10} className="px-2 pt-2">
            <p className="mb-2 bold">LinkedIn Notizie</p>
          </Col>
          <Col xs={2} className="pt-2 icona-news">
            <InfoSquareFill />
          </Col>
        </Row>
        <Row>
          <Col className="ms-3">
            <ul className="lista">
              {titles.length === 0 ? (
                <div className="text-center my-5">
                  <Spinner variant="primary" />
                </div>
              ) : (
                titles
                  .slice(0, newsParam)
                  .map((post, i) => <SingleNews key={i} post={post} />)
              )}
            </ul>
          </Col>
        </Row>
        <Row>
          {titles?.length > 0 && (
            <div className="mt-2">
              <button
                onClick={() => {
                  setOtherNews(!otherNews);
                  !otherNews ? setNewsParam(10) : setNewsParam(5);
                }}
                href="#/"
                className="altro"
              >
                {!otherNews ? "Visualizza altro " : "Mostra meno "}
                {!otherNews ? <ChevronCompactDown /> : <ChevronCompactUp />}
              </button>
            </div>
          )}
        </Row>
      </Container>
      <Card className="imgbcard rounded">
        <Card.Img
          variant="top"
          src="https://cdn.discordapp.com/attachments/1055858256800645171/1081214781693890651/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
          className="rounded"
        />
      </Card>
    </>
  );
};
