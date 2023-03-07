import { Card, Col, Container, ListGroup, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import logoLinkedin from "../../assets/imgs/Linkedin-Logo-700x394.png";
import { InfoSquareFill } from "react-bootstrap-icons";
import { transformToDate } from "../../hooks/formatDate";
import { ChevronCompactDown } from "react-bootstrap-icons";

export const HomeRightCards = ({ titles }) => {
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
              {titles.length > 0 ? (
                titles.map((post, i) => (
                  <div>
                    <a href={`/` + post.user._id}>
                      <li key={i}>
                        <p>{post?.text}</p>
                      </li>
                    </a>
                    <small>
                      {post?.createdAt && transformToDate(post.createdAt)}
                    </small>
                  </div>
                ))
              ) : (
                <div className="text-center my-5">
                  <Spinner variant="primary" />
                </div>
              )}
            </ul>
          </Col>
        </Row>
        <Row>
          {titles?.length > 0 && (
            <div className="mt-3">
              <a href="#/" className="altro">
                Visualizza altro <ChevronCompactDown />
              </a>
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
      <div className="footerlinks">
        <div>
          <Link>Informazioni</Link> <Link>Accessibilità</Link>
        </div>
        <div>
          <Link>Centro Assistenza</Link> <Link>Privacy e condizioni</Link>
        </div>
        <div>
          <Link>Opzioni per gli annunci pubblicitari</Link>
        </div>
        <div>
          <Link>Pubblicità</Link> <Link>Servizi alle aziende</Link>
        </div>
        <div>
          <Link>Scarica l'app Linkedin</Link>
          <Link>Altro</Link>
        </div>

        <div className="logoImg mt-3">
          <div>
            <img src={logoLinkedin} alt="" />
            <span className="fw-semibold"> Linkedin Corporation ©2023</span>
          </div>
        </div>
      </div>
    </>
  );
};
