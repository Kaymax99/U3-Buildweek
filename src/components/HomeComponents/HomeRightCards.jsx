import { Col, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import {
  BsFillBookmarkFill,
  BsFillPersonPlusFill,
  BsFillCalendar3Fill,
} from "react-icons/bs";
function HomeProfileCard() {
  return (
    <>
      <div className="Contenitore">
        <Row xs={12}>
          <Image
            className="imgcover"
            src="https://placekitten.com/200/300"
            alt=""
          />
        </Row>
        <Row>
          <img
            className="imgprofile"
            src="https://placekitten.com/200/200"
            alt=""
          />
        </Row>
        <Row className="TitoloCard">
          <h6>Ti diamo il benvenuto Nome</h6>
          <Link to="#"> Aggiungi una foto</Link>
          <hr />
        </Row>
        <Row className="secondpart">
          <Col xs={9}>
            <h6>Collegamenti</h6>
            <h6 className="bold">Espandi la tua rete</h6>
          </Col>
          <Col xs={3}>
            <BsFillPersonPlusFill />
          </Col>{" "}
          <hr />
        </Row>
        <Row className="my-2">
          <p className="iconplusp">
            Accedi a strumenti e informazioni in esclusiva{" "}
          </p>
          <Link to="#">
            <BsFillCalendar3Fill /> Prova Premium gratis
          </Link>
          <hr />
        </Row>
        <Col className="d-flex gap-1 ">
          <BsFillBookmarkFill /> <p className="iconplusp">I miei elementi</p>
        </Col>
      </div>
    </>
  );
}

export default HomeProfileCard;
