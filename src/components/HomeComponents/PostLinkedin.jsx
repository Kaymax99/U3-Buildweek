import { Col, Row, Image, Button } from "react-bootstrap";
import { BsX, BsThreeDots } from "react-icons/bs";
import { HandThumbsUp, GlobeAmericas, ChatText, ArrowRepeat } from "react-bootstrap-icons";
import { RiSendPlaneFill } from "react-icons/ri";
import like from "../../assets/imgs/like.svg";
import clap from "../../assets/imgs/clap.svg";
import love from "../../assets/imgs/love.svg";
import { formatDate } from "../../hooks/formatDate";
import { deletePost } from "../Fetches/FetchPosts";
import { useSelector } from "react-redux";

const PostLinkedin = ({ post }) => {
  const profile = useSelector((state) => state.profile.content);
  const randomReactions = () => {
    return Math.floor(Math.random() * (50 - 1 + 1)) + 20;
  };
  const randomComments = () => {
    return Math.floor(Math.random() * (20 - 1 + 1)) + 1;
  };

  // console.log(post);

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
              {post.user._id === profile._id ? (
                <BsX
                  className="PostSingleIcon"
                  onClick={() => {
                    handleDeletePost(post._id);
                    setTimeout(function () {
                      window.location.reload();
                    }, 100);
                  }}
                />
              ) : (
                <div></div>
              )}
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

        <Row xs={12} className="my-1">
          <div className="BottomButtons">
            <Button>
              <HandThumbsUp /> Consiglia
            </Button>
            <Button>
              <ChatText /> Commenta
            </Button>
            <Button>
              <ArrowRepeat /> Diffondi il post
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
