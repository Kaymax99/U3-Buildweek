import "./HomeCentralNewCard.css";
import { Col, Row, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { BsX, BsThreeDots, BsShare } from "react-icons/bs";
import { BiLike, BiWorld } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";

function HomeCentralNewCard() {
  return (
    <>
      <div className="ConenitorePrincipale">
        <Row xs={12} className="my-2 d-flex">
          <Col xs={2}>
            <Image className="PostProfileImg" src="https://placekitten.com/100/100" alt="" />
          </Col>
          <Col xs={8} className="">
            <h1 className="PostH1 bold marginTopMod">Nome</h1>
            <h3 className="PostH3 marginTopMod"># follower</h3>
            <h3 className="PostH3 marginTopMod">tempo trascorso dal post <BiWorld/></h3>
          </Col>
          <Col xs={2} className="PostIconsTop">
            <div>
              <BsThreeDots className="PostSingleIcon" />
            </div>
            <div>
              {" "}
              <BsX className="PostSingleIcon" />
            </div>
          </Col>
        </Row>

        <Row xs={12}>
          <h2 className="PostH2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquid itaque voluptates molestiae
            tempora consequatur dolor dolore. Eaque veritatis ipsam omnis voluptas officiis aliquid, dignissimos magnam
            inventore, sunt quos quidem!
          </h2>
        </Row>
        <Row xs={12}>
          <Image className="PostMainImg" src="https://placekitten.com/200/100" alt="" />
        </Row>

        <Row xs={12}></Row>
        <hr />
        <Row xs={12}>
          <div className="BottomButtons">
            <Button>
              <BiLike /> Consiglia
            </Button>
            <Button>
              <FaRegCommentDots /> Commenta
            </Button>
            <Button>
              <BsShare /> Diffondi il post
            </Button>
            <Button>
              <RiSendPlaneFill /> Invia
            </Button>
          </div>
        </Row>
      </div>
    </>
  );
}

export default HomeCentralNewCard;
