import { Col, Row, Image, Button } from "react-bootstrap";
import { BsX, BsThreeDots } from "react-icons/bs";
import {
  HandThumbsUp,
  GlobeAmericas,
  ChatText,
  ArrowRepeat,
} from "react-bootstrap-icons";
import { RiSendPlaneFill } from "react-icons/ri";
import like from "../../assets/imgs/like.svg";
import clap from "../../assets/imgs/clap.svg";
import love from "../../assets/imgs/love.svg";
import { transformToDate } from "../../hooks/formatDate";
import { deletePost } from "../Fetches/FetchPosts";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PostComments } from "../Fetches/FetchComments";

import CommentArea from "./CommentArea";
import { useState } from "react";
import { useRef } from "react";

export const PostLinkedin = ({ post, retrievePosts }) => {
  const ref = useRef(null);

  const [showCommentArea, setShowCommentArea] = useState(false);

  const profile = useSelector((state) => state.profile.content);

  const randomReactions = () => {
    return Math.floor(Math.random() * (50 - 1 + 1)) + 20;
  };
  const randomComments = () => {
    return Math.floor(Math.random() * (20 - 1 + 1)) + 1;
  };

  const handleDeletePost = async (postId) => {
    try {
      await deletePost(postId, () => {
        console.log("post deleted");
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = () => {
    if (ref) {
      ref.current.focus();
    }
  };

  return (
    <>
      <div className="ContenitorePrincipale mb-3">
        <Row xs={12} className="my-2 d-flex">
          <Col xs={3} sm={2} className="text-center pe-1">
            <Link to={`/` + post.user._id}>
              <Image
                className="PostProfileImg"
                src={post.user.image}
                alt="image-profile"
              />
            </Link>
          </Col>
          <Col xs={7} sm={8} className="ps-0">
            <Link to={`/` + post.user._id}>
              <h1 className="PostH1 bold marginTopMod">
                {post?.user.name
                  ? post?.user.surname
                    ? post?.user.name + " " + post?.user.surname
                    : post?.user.name
                  : "Unknown User"}
              </h1>
            </Link>
            <h3 className="PostH3 marginTopMod gap-1">
              {post?.createdAt && transformToDate(post.createdAt)}
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
                    retrievePosts();
                    setTimeout(() => {
                      alert(
                        "Much wow, very delete. Will disappear in a couple of seconds"
                      );
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
                <Button
                  variant="none"
                  className="reactionsContainer px-0 d-flex align-items-center"
                >
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
            <Button
              onClick={() => {
                setShowCommentArea(true);
                handleClick();
              }}
            >
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
        <Row>
          {showCommentArea && (
            <CommentArea
              image={profile?.image}
              inputRef={ref}
              post={post._id}
            />
          )}
        </Row>
      </div>
    </>
  );
};
