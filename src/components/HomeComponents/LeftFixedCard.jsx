import Card from "react-bootstrap/Card";
// import { useScrollPosition } from "../../hooks/useScrollPosition";

export const LeftFixedCard = () => {
  // const scrollPosition = useScrollPosition();
  // console.log(scrollPosition);
  return (
    <Card className="linkscard mb-3">
      <Card.Body className="border-bottom">
        <ul>
          <li>
            <Card.Link href="#">Gruppi</Card.Link>
          </li>
          <li>
            <Card.Link href="#">Eventi</Card.Link>
          </li>
          <li>
            <Card.Link href="#">Hashtag seguiti</Card.Link>
          </li>
        </ul>{" "}
      </Card.Body>
      <p className="my-2 text-muted fw-semibold">Scopri di più</p>
    </Card>
  );
};
