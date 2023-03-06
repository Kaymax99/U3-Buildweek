import { Col, Image, Row } from "react-bootstrap";
import { FaRegSmile } from "react-icons/fa";
import { SlPicture } from "react-icons/sl";
import unRegistered from "../../assets/imgs/unregistered.png";
import SingleComment from "./SingleComment";

const CommentArea = (props) => {
  let mioCommento = {
    author: "Cannavacciuolo",
    comment:
      "La laurea in psicologia può aprire molte strade oltre a quella dello psicologo, per fortuna con un po' di specializzazione aggiuntiva si ha l'imbarazzo della scelta: risorse umane, marketing, assistenza clienti, vendite, etc...per orientarsi meglio sulla direzione due buone domande potrebbero essere: In quali attività operative i miei punti di forza mi farebbero spiccare? Quali problemi che hanno le aziende/persone mi piacerebbe aiutare a risolvere?",
    createdAt: "2023-03-05",
  };

  return (
    <div className="contenitore-commenti">
      <Row xs={12} className="my-2 ">
        <Col xs={2} className="align-self-center">
          <Image
            className="PostProfileImage"
            src={props.image ? props.image : unRegistered}
            alt=""
          />
        </Col>
        <Col xs={8} className="align-self-center">
          <input
            autoFocus="true"
            className="PostButton"
            ref={props.inputRef}
            type="text"
            placeholder="Aggiungi un commento"
          />
        </Col>
        <Col xs={2}>
          <div className="text-dark fs-6">
            <FaRegSmile className="me-2" />
            <SlPicture className="ms-2" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Più rilevanti 🔽</p>
        </Col>
      </Row>
      <Row>
        <SingleComment comment={mioCommento} />
      </Row>
    </div>
  );
};

export default CommentArea;
