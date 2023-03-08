import { Card, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import logoLinkedin from "../../assets/imgs/Linkedin-Logo-700x394.png";

export const HomeRightCards = ({ titles }) => {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title className="bold">LinkedIn Notizie</Card.Title>

          <div>
            <ul className="listaNews">
              {titles?.length > 0 ? (
                titles.slice(0, 5).map((post, i) => (
                  <li key={i}>
                    By:
                    <a href={`/` + post.user._id}>
                      <p className="bold">{post.user.name}</p>
                    </a>
                    Contenuto:
                    <p className="bold"> {post.text.slice(0, 20)}...</p>
                  </li>
                ))
              ) : (
                <div className="text-center my-5">
                  <Spinner variant="primary" />
                </div>
              )}
            </ul>
          </div>

          {titles?.length > 0 ? (
            <Card.Link href="#">Visualizza altro</Card.Link>
          ) : (
            ""
          )}
        </Card.Body>
      </Card>
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
