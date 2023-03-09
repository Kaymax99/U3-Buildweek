import { Container, Row, Col, Spinner, Button } from "react-bootstrap";
import { HomeProfileCard } from "./HomeComponents/HomeProfileCard";
import { PostLinkedin } from "./HomeComponents/PostLinkedin";
import { useEffect, useState } from "react";

import { fetchPosts } from "./Fetches/FetchPosts";
import { CreaUnPost } from "./HomeComponents/CreaUnPost";
import { LeftFixedCard } from "./HomeComponents/LeftFixedCard";

import { HomeRightCards } from "./HomeComponents/HomeRightCards";
import { useSelector } from "react-redux";

export const Home = () => {
  const [scrollTop, setScrollTop] = useState(0); // TENTATIVO PER SCROLL DINAMICO DEI POST

  const [postCounter, setPostCounter] = useState(5);
  const [titles, setTitles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // const [posts, setPosts] = useState([]);
  const [friendsPosts, setFriendsPosts] = useState([]);
  const friendsArray = useSelector((state) => state.friends.content);

  // const retrieveAllRecentPosts = async () => {
  //   const data = await fetchPosts();
  //   setTitles(() => {
  //     return data.slice(0, 5);
  //   });
  //   setPosts(() => {
  //     return data.reverse().slice(0, 20);
  //   });
  // };

  const retrieveAllRecentPostsFriends = async () => {
    setIsLoading(true);

    const data = await fetchPosts();

    setTitles(() => {
      return data.slice(0, 10);
    });

    let postdegliamici = data
      .filter((post) =>
        friendsArray.map((friend) => friend?._id).includes(post.user?._id)
      )
      .reverse();

    setFriendsPosts(() => {
      return postdegliamici;
    });
    // Recupera tutti i post recenti
    // setFriendsPosts(() => {
    //   return data.reverse().slice(0, 20);
    // });
    setIsLoading(false);
  };

  //TENTATIVO SCROLL ⬇️
  const handleScroll = (event) => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      console.log("sei arrivato in fondo alla pagina!");
      setPostCounter(postCounter + 5);
      console.log("post visualizzati: ", postCounter);
    }
  };

  window.addEventListener("scroll", handleScroll);
  // return () => {
  //   window.removeEventListener("scroll", handleScroll);
  // };

  useEffect(() => {
    retrieveAllRecentPostsFriends();
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
              <CreaUnPost retrievePosts={retrieveAllRecentPostsFriends} />
            </Row>
            <Row>
              <hr />
            </Row>
            <Row>
              {friendsPosts?.length > 0 && !isLoading ? (
                friendsPosts.slice(0, postCounter).map((post, i) => {
                  return (
                    <PostLinkedin
                      key={"post-" + i}
                      post={post}
                      retrievePosts={retrieveAllRecentPostsFriends}
                    />
                  );
                })
              ) : isLoading ? (
                <div className="text-center">
                  <Spinner variant="primary" />
                </div>
              ) : (
                <div className="text-center">
                  <span>
                    Non hai aggiunto ancora nessuno alla tua rete, collegati con
                    un amico
                  </span>
                </div>
              )}
              {/* {friendsPosts?.length > 0 && (
                <Button
                  variant="link"
                  onClick={() => setPostCounter(postCounter + 5)}
                >
                  Altri post
                </Button>
              )} */}
              {/* <Button onClick={() => setPostCounter(postCounter + 5)}> // <--- Inutile perché c'è lo scroll
                Altri post
              </Button> */}
              {friendsPosts?.length !== 0 &&
              friendsPosts?.length > postCounter ? (
                <div className="text-center">
                  <Spinner variant="primary"></Spinner>
                </div>
              ) : (
                <div className="text-center mt-3">
                  Non ci sono altri post da visualizzare!
                </div>
              )}
            </Row>
          </Col>

          <Col sm={0} lg={3} className="d-none d-lg-block">
            <Row>
              <HomeRightCards titles={titles} />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
