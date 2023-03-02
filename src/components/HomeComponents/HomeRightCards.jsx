<<<<<<< Updated upstream
import { Col, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./HomeProfileCard.css";

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
=======
import { useEffect, useState } from "react";
import { fetchPosts } from "../Fetches/FetchPosts";
import { Card } from "react-bootstrap";

function HomeRightCard() {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    const getPostTitles = async () => {
      const titles = await fetchPosts();
      setTitles(titles);
    };
    getPostTitles();
  }, []);
  console.log(titles);
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Body>
        <Card.Title className="bold">LinkedIn Notizie</Card.Title>

        <div>
          <ul className="listaNews">
            {titles.slice(0, 5).map((post, i) => (
              <li key={i}>
                By:<p className="bold">{post.user.name}</p> Contenuto:
                <p className="bold"> {post.text.slice(0, 20)}...</p>
              </li>
            ))}
          </ul>
        </div>

        <Card.Link href="#">Visualizza altro</Card.Link>
      </Card.Body>
    </Card>
>>>>>>> Stashed changes
  );
}

export default HomeProfileCard;
