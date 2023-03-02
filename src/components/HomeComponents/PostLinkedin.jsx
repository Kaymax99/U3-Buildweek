import { Col, Row, Image, Button } from "react-bootstrap";

import { BsX, BsThreeDots, BsShare } from "react-icons/bs";
import { BiLike, BiWorld } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";

const PostLinkedin = ({ post }) => {
  console.log(post);
  return (
    <>
      <div className="ContenitorePrincipale mb-3">
        <Row xs={12} className="my-2 d-flex">
          <Col xs={2}>
            <Image
              className="PostProfileImg"
              src={post.user.image}
              alt="image-profile"
            />
          </Col>
          <Col xs={8} className="">
            <h1 className="PostH1 bold marginTopMod">
              {post.user.name} {post.user.surname}
            </h1>
            <h3 className="PostH3 marginTopMod">
              {post.createdAt}
              <BiWorld />
            </h3>
          </Col>
          <Col xs={2} className="PostIconsTop">
            <div>
              <BsThreeDots className="PostSingleIcon" />
            </div>
            <div>
              <BsX className="PostSingleIcon" />
            </div>
          </Col>
        </Row>

        <Row xs={12}>
          <h2 className="PostH2">{post.text}</h2>
        </Row>
        <Row xs={12}>
          <Image
            // aggiungere immagine del post
            className="PostMainImg"
            src="https://placekitten.com/200/100"
            alt=""
          />
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
};

export default PostLinkedin;
