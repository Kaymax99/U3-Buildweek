import { Container, Row, Col, Spinner } from "react-bootstrap";
import { HomeProfileCard } from "./HomeComponents/HomeProfileCard";
import { PostLinkedin } from "./HomeComponents/PostLinkedin";
import { useEffect, useState } from "react";
import { fetchPosts } from "./Fetches/FetchPosts";
import { CreaUnPost } from "./HomeComponents/CreaUnPost";
import { LeftFixedCard } from "./HomeComponents/LeftFixedCard";
import { HomeRightCards } from "./HomeComponents/HomeRightCards";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [titles, setTitles] = useState([]);

  const retrievePosts = async () => {
    const data = await fetchPosts();
    setTitles(() => {
      return data;
    });
    setPosts(() => {
      return data.reverse().slice(0, 20);
    });
  };

  useEffect(() => {
    retrievePosts();
    // console.log(posts);
  }, []);

  return (
    <>
      <Container className="mt-5 pt-4">
        <Row className="justify-content-evenly">
          <Col xs={12} md={4} lg={3}>
            <Row>
              <HomeProfileCard />
              <LeftFixedCard />
            </Row>
          </Col>

          <Col xs={12} md={7} lg={5}>
            <Row>
              <CreaUnPost retrievePosts={retrievePosts} />
            </Row>
            <Row>
              <hr />
            </Row>
            <Row>
              {posts?.length === 0 ? (
                <div className="text-center mt-5">
                  <Spinner variant="primary" />
                </div>
              ) : (
                posts.map((post, i) => {
                  return (
                    <PostLinkedin
                      key={"post-" + i}
                      post={post}
                      retrievePosts={retrievePosts}
                    />
                  );
                })
              )}
            </Row>
          </Col>

          <Col sm={0} lg={3}>
            <Row>
              <HomeRightCards titles={titles} />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
