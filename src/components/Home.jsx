import { Container, Row, Col } from "react-bootstrap";
import HomeProfileCard from "./HomeComponents/HomeProfileCard";

import PostLinkedin from "./HomeComponents/PostLinkedin";
import { useEffect, useState } from "react";

import { fetchPosts } from "./Fetches/FetchPosts";
// import CreaUnPost from "./HomeComponents/CreaUnPost";

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
      <Container>
        <Row>
          <Col xs={3}>
            <Row>
              <HomeProfileCard />
            </Row>
          </Col>

          <Col xs={5}>
            <Row>{/* <CreaUnPost /> */}</Row>
            <Row>
              <hr />
            </Row>
            <Row>
              {posts.map((post) => {
                return <PostLinkedin post={post} />;
              })}
            </Row>
          </Col>
        </Row>
        <Col xs={4}>
          <Row></Row>
        </Col>
      </Container>
    </>
  );
};
