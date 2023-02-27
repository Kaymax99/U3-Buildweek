import React, { useState, useEffect } from "react";
import { Col, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import FetchProfileByID from "./FetchProfileByID";

const ProfileCard = () => {
  const [profile, setProfile] = useState(null);

  const retrieveData = async () => {
    let data = await FetchProfileByID("5fc4b475b708c200175de891");
    setProfile(data);
  };
  useEffect(() => {
    retrieveData();
  }, []);

  return (
    <>
      <Col xs={12}>
        <Row xs={12}>dddd</Row>
        <Row>
          <Col xs={8}>
            <Row>
              <h2>{profile?.name}</h2>
            </Row>
            <Row>
              <h3>Subtitle blblblblblbblblblblblblblb</h3>
            </Row>
            <Row>
              <h4>
                Subtitle blblblblblbblblblblblblblb <Link to="#">Informazioni di contatto</Link>
              </h4>
            </Row>
            <Row>
              <button>Collegati</button>
              <button>Messaggio</button>
              <button>Altro</button>
            </Row>
          </Col>
          <Col xs={3}>
            <Row>
              <Image src=""></Image>
              <h4>NOME AZIENDA</h4>
            </Row>
            <Row>
              <Image src=""></Image>
              <h4>NOME AZIENDA</h4>
            </Row>
          </Col>
        </Row>

        {/* <Row>
          <Col>
            <h5>
              <Row>Disponibile a Lavorare</Row>
              <Row>Ruoli di ................</Row>
              <Row>
                <Link to="#">Mostra dettagli</Link>
              </Row>
            </h5>
          </Col>
          <Col>
            <h5>
              <Row>Metti in risalto i servizi che offri</Row>
              <Row>Ruoli di ................</Row>
              <Row>
                <Link to="#">Mostra dettagli</Link>
              </Row>
            </h5>
          </Col>
        </Row>  */}
      </Col>
    </>
  );
};

export default ProfileCard;
