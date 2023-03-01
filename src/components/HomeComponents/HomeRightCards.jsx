import Card from "react-bootstrap/Card";
import React from "react";

function HomeRightCard() {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Body>
        <Card.Title className="bold">LinkedIn Notizie</Card.Title>

        <div>
          <ul>
            <li className="bold">Nuova proroga per lo smart working</li>1 giorno
            fa-964lettori
            <li className="bold">Per iniziare con il piede giusto</li>1 giorno
            fa-964lettori
            <li className="bold">Oltre il nuovo logo di Nokia</li>1 giorno
            fa-964lettori
            <li className="bold">Cosa cambia della giustizia civile</li>1 giorno
            fa-964lettori
            <li className="bold">Come si sta digitalizzando il retail</li>1
            giorno fa-964lettori
          </ul>
        </div>

        <Card.Link href="#">Visualizza altro</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default HomeRightCard;
