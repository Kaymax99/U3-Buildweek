import { useEffect, useState } from "react";
import { fetchPosts } from "../Fetches/FetchPosts";
import { Card } from "react-bootstrap";

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
                  By:
                  <a href={`/` + post.user._id}>
                    <p className="bold">{post.user.name}</p>
                  </a>{" "}
                  Contenuto:
                  <p className="bold"> {post.text.slice(0, 20)}...</p>
                </li>
              ))}
            </ul>
          </div>

          <Card.Link href="#">Visualizza altro</Card.Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default HomeRightCards;
