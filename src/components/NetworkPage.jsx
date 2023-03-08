import { useState, useEffect } from "react";
import { Card, Button, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-bootstrap-icons";
import php from "../assets/imgs/placeholderpubblicità.png";
import logoLinkedin from "../assets/imgs/Linkedin-Logo-700x394.png";
import {
  FaUserFriends,
  FaRegAddressBook,
  FaUser,
  FaRegCalendarAlt,
  FaRegFileAlt,
  FaRegEnvelope,
  FaHashtag,
} from "react-icons/fa";
import React from "react";
import { fetchProfiles } from "./Fetches/FetchProfileByID";
import { useDispatch, useSelector } from "react-redux";
import { addToFriendsAction, removeFromFriendsAction } from "../redux/actions";

function Network() {
  const dispatch = useDispatch();
  const friendsArray = useSelector((state) => state.friends.content);
  const [profiles, setProfiles] = useState([]);
  const retrieveProfiles = async () => {
    let data = await fetchProfiles();
    setProfiles(data);
  };

  useEffect(() => {
    retrieveProfiles();
  }, []);
  const MAX_LENGTH = 100;

  const connectFn = (profile) => {
    dispatch(addToFriendsAction(profile));
  };

  const disconnectFn = (profile) => {
    dispatch(removeFromFriendsAction(profile));
  };

  return (
    <div className="container newnew mt-3">
      <Row>
        <Col md={3}>
          <Card className="sidecard">
            <Card.Body className="newsli">
              <h4>Gestisci la tua rete</h4>
              <ul>
                {" "}
                <li>
                  {" "}
                  <FaUserFriends />
                  Collegamenti
                </li>
                <li>
                  <FaRegAddressBook />
                  Contatti
                </li>
                <li>
                  <FaUser />
                  Persone che segui e follower
                </li>
                <li>
                  {" "}
                  <FaRegCalendarAlt />
                  Eventi
                </li>
                <li>
                  <FaRegFileAlt />
                  Pagine
                </li>
                <li>
                  <FaRegEnvelope />
                  News Letter
                </li>
                <li>
                  <FaHashtag />
                  Hashtag
                </li>
              </ul>
              <hr />
              <Card.Img variant="top" src={php} />
              <h5>Espandi la tua rete</h5>
              <hr />
              <div className="footerlinks">
                <div>
                  <a href="#"> Informazioni</a> <a href="#">Accessibilità</a>
                </div>
                <div>
                  <a href="#">Centro Assistenza</a> <a href="#">Privacy e condizioni</a>
                </div>
                <div>
                  <a href="#">Opzioni per gli annunci pubblicitari</a>
                </div>
                <div>
                  <a href="#">Pubblicità</a> <a href="#">Servizi alle aziende</a>
                </div>
                <div>
                  <a href="#">Scarica l'app Linkedin</a>
                  <a href="#">Altro</a>
                </div>

                <div className="logoImg mt-3">
                  <div>
                    <img src={logoLinkedin} alt="" />
                    <span className="fw-semibold"> Linkedin Corporation ©2023</span>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={9}>
          <div className="row">
            <Card className="firstcardnetwork">
              <Col xs={12} className="d-flex justify-content-between">
                <span className="my-4 mx-3">Persone che segui</span>
                <span className="my-4 mx-3"> Gestisci</span>
              </Col>
              {friendsArray.length > 0 ? (
                friendsArray.map((profile, i) => (
                  <div className="col-md-4 mb-3" key={"friends-key" + i}>
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
                            profile.bio.slice(0, MAX_LENGTH) + (profile.bio.lenght > MAX_LENGTH ? "..." : "")}
                        </Card.Text>
                        <Button className="bottonNetwork" variant="primary" onClick={() => disconnectFn(profile)}>
                          Smetti di seguire
                        </Button>
                      </Card.Body>
                    </Card>
                  </div>
                ))
              ) : (
                <p>Non si sono ancora persone che segui!</p>
              )}
            </Card>
            <Card className="secondcardnetwork">
              <Card className="scrittanetwork">
                <Card.Body>Persone popolari da seguire</Card.Body>
                <Card.Body>Vedi tutti</Card.Body>
              </Card>
              {profiles.slice(0, 12).map((profile, i) => (
                <div className="col-md-4 mb-3" key={"profile-key" + i}>
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
                          profile.bio.slice(0, MAX_LENGTH) + (profile.bio.lenght > MAX_LENGTH ? "..." : "")}
                      </Card.Text>
                      {friendsArray.findIndex((friend) => friend._id === profile._id) === -1 ? (
                        <Button
                          className="bottonNetwork"
                          variant="primary rounded-pill py-1 px-3 my-1 me-2 fw-bold fs-7"
                          onClick={() => {
                            connectFn(profile);
                          }}
                        >
                          Segui
                        </Button>
                      ) : (
                        <Button
                          className="bottonNetwork"
                          variant="outline-primary rounded-pill py-1 px-3 my-1 me-2 fw-bold fs-7"
                          onClick={() => {
                            disconnectFn(profile);
                          }}
                        >
                          ✔<span>Collegato</span>
                        </Button>
                      )}
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
