import { Col, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import { BsFillBookmarkFill, BsFillPersonPlusFill, BsFillCalendar3Fill } from "react-icons/bs";
import bg from "../../assets/imgs/bg.jpg";
import unRegistered from "../../assets/imgs/unregistered.png";
import { useSelector } from "react-redux";

function HomeProfileCard() {
  const profile = useSelector((state) => state.profile.content);
  return (
    <>
      <div className="Contenitore mb-3">
        <div className="text-center">
          <Row>
            <Image className="imgcover" src={profile?.bg ? profile.bg : bg} alt="profile bg" />
          </Row>
          <div className="position-relative">
            <img className="imgprofile" src={profile?.image ? profile.image : unRegistered} alt="" />
          </div>
          <Row className="TitoloCard">
            <Link to="/me">
              <h6>{profile?.name ? profile.name + " " + profile.surname : ""} </h6>
            </Link>
          </Row>
          <Row className="fs-7 border-bottom pb-1">
            <p className="mb-0 text-muted">{profile?.title ? profile.title : ""}</p>
            <Link className="mt-1" to="#">
              Aggiungi una foto
            </Link>
          </Row>
        </div>
        <Row className="py-2 collegamenti border-bottom">
          <Col xs={9} className="fs-7">
            <p className="mb-0 text-muted">Collegamenti</p>
            <p className="mb-0 bold">Espandi la tua rete</p>
          </Col>
          <Col xs={3}>
            <BsFillPersonPlusFill />
          </Col>{" "}
        </Row>
        <Row className="py-2 fs-7 border-bottom">
          <p className="mb-0 text-muted">Accedi a strumenti e informazioni in esclusiva </p>
          <Link to="#" className="d-flex gap-1 align-items-center">
            <BsFillCalendar3Fill /> <span>Prova Premium gratis</span>
          </Link>
        </Row>
        <Col className="d-flex gap-1 align-items-center py-1">
          <BsFillBookmarkFill /> <span>I miei elementi</span>
        </Col>
      </div>
    </>
  );
}

export default HomeProfileCard;
