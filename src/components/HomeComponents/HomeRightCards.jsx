import { useEffect, useState } from "react";
import { fetchPosts } from "../Fetches/FetchPosts";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import logoLinkedin from "../logo/Linkedin-Logo-700x394.png";
function HomeRightCards() {
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
    <>
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
      <Card className="imgbcard" style={{ width: "20rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
      </Card>
      <div className="footerlinks">
        <div>
          <Link>informazioni</Link> <Link>Accessibilità</Link>
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
      </div>
      <div className="logo">
        <div>
          <img src={logoLinkedin} alt="" />
        </div>{" "}
        <p> Linkedin Corporation ©2023</p>{" "}
      </div>
    </>
  );
}

export default HomeRightCards;
