import { Col, Row, Image, Button } from "react-bootstrap";
import { BsX, BsThreeDots } from "react-icons/bs";
import { HandThumbsUp, GlobeAmericas, ChatText, ArrowRepeat } from "react-bootstrap-icons";
import { RiSendPlaneFill } from "react-icons/ri";
import like from "../../assets/imgs/like.svg";
import clap from "../../assets/imgs/clap.svg";
import love from "../../assets/imgs/love.svg";

import { deletePost } from "../Fetches/FetchPosts";

const PostLinkedin = ({ post }) => {
  const formatDate = (input) => {
    var datePart = input.match(/\d+/g),
      year = datePart[0].substring(2), // get only two digits
      month = datePart[1],
      day = datePart[2];

    return day + "-" + month + "-" + year;
  };
  const randomReactions = () => {
    return Math.floor(Math.random() * (50 - 1 + 1)) + 20;
  };
  const randomComments = () => {
    return Math.floor(Math.random() * (20 - 1 + 1)) + 1;
  };

  formatDate("2010/01/18"); // "18/01/10"
  console.log(post);

  const handleDeletePost = async (postId) => {
    try {
      await deletePost(postId, () => {
        console.log("post deleted");
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="ContenitorePrincipale mb-3">
        <Row xs={12} className="my-2 d-flex">
          <Col xs={2} className="text-center pe-1">
            <Image className="PostProfileImg" src={post.user.image} alt="image-profile" />
          </Col>
          <Col xs={8} className="ps-0">
            <a href={`/` + post.user._id}>
              <h1 className="PostH1 bold marginTopMod">
                {post.user.name ? post.user.name + " " + post.user.surname : "Unknown User"}
              </h1>
            </a>
            <h3 className="PostH3 marginTopMod gap-1">
              {formatDate(post.createdAt.slice(0, 10))}
              <GlobeAmericas />
            </h3>
          </Col>
          <Col xs={2} className="PostIconsTop">
            <div>
              <BsThreeDots className="PostSingleIcon" />
            </div>
            <div>
              <BsX className="PostSingleIcon" onClick={() => handleDeletePost(post._id)} />
            </div>
          </Col>
        </Row>

        <Row xs={12}>
          <h2 className="PostH2 mb-0">{post.text}</h2>
        </Row>
        <Row xs={12}>
          {post?.image ? (
            <Image
              // aggiungere immagine del post
              className="PostMainImg mt-2"
              src={post.image}
              alt=""
            />
          ) : (
            ""
          )}
        </Row>

        <Row xs={10}>
          <Col>
            <ul className="d-flex justify-content-between border-bottom">
              <li>
                <Button variant="none" className="reactionsContainer px-0 d-flex align-items-center">
                  {/* <span className="like">
                    <HandThumbsUpFill color="white" className="likeSVG" />
                  </span> */}
                  <img src={like} alt="like" className="reaction"></img>
                  <img src={clap} alt="clap" className="reaction"></img>
                  <img src={love} alt="love" className="reaction"></img>
                  <span>{randomReactions()}</span>
                </Button>
              </li>
              <li>
                <Button variant="none" className="reactionsContainer px-0">
                  <span>{randomComments()} commenti</span>
                </Button>
              </li>
            </ul>
          </Col>
        </Row>

        <Row xs={12} className="mt-2">
          <div className="BottomButtons">
            <Button className="pt-0">
              <HandThumbsUp /> Consiglia
            </Button>
            <Button className="pt-0">
              <ChatText /> Commenta
            </Button>
            <Button className="pt-0">
              <ArrowRepeat /> Diffondi il post
            </Button>
            <Button className="pt-0">
              <RiSendPlaneFill /> Invia
            </Button>
          </div>
        </Row>
      </div>
    </>
  );
};

export default PostLinkedin;
