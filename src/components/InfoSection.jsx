import { Button, Col } from "react-bootstrap";
import background from "../assets/imgs/background.jpg";
import { FaPencilAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import bg from "../assets/imgs/bg.jpg";

const InfoSection = () => {
  return (
    <Col xs={12} md={8}>
      <div style={{ width: 785 + "px" }}>
        <div className="d-flex flex-column rounded">
          <div className="background">
            <img src={bg} alt="" style={{ width: 785 + "px" }} />
            <img
              src="https://via.placeholder.com/150"
              alt="profile_img"
              className="profile_img"
            />
          </div>
          <div className="pencil-container mt-2 container-fluid">
            <div>
              <FaPencilAlt className="pencil fs-5" />
            </div>
          </div>
          <div className="m-3">
            <div className="name mt-4">
              <h2>Antonio D'Amico</h2>

              <small>Università degli Studi di Milano</small>
            </div>
            <p>--</p>
            <p className="text-secondary">
              Reggio nell'Emilia, Emilia Romagna, Italia{" "}
            </p>
            <Link style={{ textDecoration: "none" }}>
              <p className="text-primary info-contatto">
                Informazioni di contatto
              </p>
            </Link>
            <Button variant="primary rounded-pill px-4">Disponibile per</Button>
            <Button variant="outline-primary rounded-pill ms-2 px-4">
              Aggiungi sezione del profilo
            </Button>
            <Button variant="outline-secondary rounded-pill ms-2 px-4">
              Altro
            </Button>
          </div>
        </div>
        <div className="rounded mt-2">
          <div className="m-3 mt-4">
            <h4>Informazioni</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam ab
              temporibus pariatur aspernatur, amet nemo incidunt aliquam
              corrupti vero nostrum nulla sed facere architecto provident aut
              praesentium, adipisci molestiae earum. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Totam ab temporibus pariatur
              aspernatur, amet nemo incidunt aliquam corrupti vero nostrum nulla
              sed facere architecto provident aut praesentium, adipisci
              molestiae earum.
            </p>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default InfoSection;
