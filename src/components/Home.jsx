import { Container, Row, Col } from "react-bootstrap";
import HomeProfileCard from "./HomeComponents/HomeProfileCard";

import PostLinkedin from "./HomeComponents/PostLinkedin";
import { useEffect, useState } from "react";

import {
  addPost,
  fetchPosts,
  fetchPostById,
  deletePost,
} from "./Fetches/FetchPosts";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [postContent, setPostContent] = useState({});
  const [singlePost, setSinglePost] = useState(null);
  const numeroPost = 10;
  const retrievePosts = async () => {
    const data = await fetchPosts();
    let indexRandom = Math.floor(Math.random() * (data.length - numeroPost));
    console.log(indexRandom);
    setPosts(data.slice(indexRandom, indexRandom + numeroPost));
  };
  const retrieveSinglePost = async () => {
    const data = await fetchPostById("63ff6067f443aa00132286e5");
    setSinglePost(data);
  };

  const deleteSinglePost = async () => {
    const data = await deletePost("63ff6067f443aa00132286e5");
    setSinglePost(data);
  };

  useEffect(() => {
    retrievePosts();
    retrieveSinglePost();
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col xs={3} md={6}>
            <Row>
              <HomeProfileCard />
            </Row>
          </Col>

          <Col xs={6} md={6}>
            <Row>
              <PostLinkedin />
            </Row>
          </Col>
        </Row>
        <Col xs={3} md={12}>
          <Row></Row>
        </Col>
      </Container>
    </>
  );
};
