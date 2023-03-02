import { Container, Row, Col } from "react-bootstrap";
import HomeProfileCard from "./HomeComponents/HomeProfileCard";
import PostLinkedin from "./HomeComponents/PostLinkedin";
import { useEffect, useState } from "react";
import { fetchPosts } from "./Fetches/FetchPosts";

import CreaUnPost from "./HomeComponents/CreaUnPost";

export const Home = () => {
  const [posts, setPosts] = useState([]);

  const retrievePosts = async () => {
    const data = await fetchPosts();
    setPosts(() => {
      return data.reverse().slice(0, 100);
    });
  };

  useEffect(() => {
    retrievePosts();
    console.log(posts);
  }, []);

  return (
    <>
      <Container className="mt-5 pt-4">
        <Row className="justify-content-evenly">
          <Col xs={12} md={4} lg={3}>
            <Row>
              <HomeProfileCard />
            </Row>
          </Col>

          <Col xs={12} md={7} lg={5}>
            <Row>
              <CreaUnPost />
            </Row>
            <Row>
              <hr />
            </Row>
            <Row>
              {posts.map((post) => {
                return <PostLinkedin post={post} />;
              })}
            </Row>
          </Col>

          <Col xs={0} lg={3}>
            <Row>
              <div>A</div>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
