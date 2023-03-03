import Card from "react-bootstrap/Card";

function LeftFixedCard() {
  return (
    <Card className="linkscard">
      <Card.Body>
        <ul>
          <li>
            {" "}
            <Card.Link href="#">Gruppi</Card.Link>
          </li>
          <li>
            {" "}
            <Card.Link href="#">Eventi</Card.Link>
          </li>
          <li>
            {" "}
            <Card.Link href="#">Hashtag seguiti</Card.Link>
          </li>
        </ul>{" "}
      </Card.Body>
      <hr />
      <p>Scopri di più</p>
    </Card>
  );
}

export default LeftFixedCard;
