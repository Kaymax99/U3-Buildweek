import { useState, useEffect } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-bootstrap-icons";
import php from "../assets/imgs/placeholderpubblicità.png";
import logoLinkedin from "../assets/imgs/Linkedin-Logo-700x394.png";
function Network() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await fetch(
          "https://striveschool-api.herokuapp.com/api/profile/",
          {
            headers: {
              Authorization: "Bearer " + process.env.REACT_APP_MYTOKEN,
            },
          }
        );
        const data = await response.json();
        setProfiles(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfiles();
  }, []);
  const MAX_LENGTH = 100;

  return (
    <div className="container mt-3">
      <h2>List of Friends</h2>
      <Row>
        <Col md={3}>
          <Card className="sidecard">
            <Card.Body>
              <h4>Gestisci la tua rete</h4>
              <ul>
                <li>Collegamenti</li>
                <li>Contatti</li>
                <li>Persone che segui e follower</li>
                <li>Eventi</li>
                <li>Pagine</li>
                <li>News Letter</li>
                <li>Hashtag</li>
              </ul>
              <hr />
              <Card.Img variant="top" src={php} />
              <h5>Espandi la tua rete</h5>
              <hr />
              <div className="footerlinks">
                <div>
                  <Link>Informazioni</Link> <Link>Accessibilità</Link>
                </div>
                <div>
                  <Link>Centro Assistenza</Link>{" "}
                  <Link>Privacy e condizioni</Link>
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
                    <span className="fw-semibold">
                      {" "}
                      Linkedin Corporation ©2023
                    </span>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={9}>
          <div className="row">
            <Card className="firstcardnetwork">
              <Card.Body>Nessun invito in sospeso</Card.Body>
              <Card.Body> Gestisci</Card.Body>
            </Card>
            <Card className="secondcardnetwork">
              <Card className="scrittanetwork">
                <Card.Body>Persone popolari da seguire</Card.Body>
                <Card.Body>Vedi tutti</Card.Body>
              </Card>
              {profiles.slice(0, 12).map((profile) => (
                <div className="col-md-4 mb-3" key={profile._id}>
                  <Card className="cardNetwork">
                    <div className="divimgnetwork">
                      <Card.Img variant="top" src={profile.image} />
                    </div>
                    <Card.Body>
                      <Card.Title>
                        {profile.name} {profile.surname}
                      </Card.Title>
                      <Card.Text>
                        {profile.bio &&
                          profile.bio.slice(0, MAX_LENGTH) +
                            (profile.bio.lenght > MAX_LENGTH ? "..." : "")}
                      </Card.Text>
                      <Button className="bottonNetwork" variant="primary">
                        Segui
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Network;
