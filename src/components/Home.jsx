import { Container, Row, Col, Spinner, Button } from "react-bootstrap";
import { HomeProfileCard } from "./HomeComponents/HomeProfileCard";
import { PostLinkedin } from "./HomeComponents/PostLinkedin";
import { useEffect, useState } from "react";

import {
  addPost,
  fetchPosts,
  fetchPostById,
  deletePost,
} from "./Fetches/FetchPosts";
import HomeRightCard from "./HomeComponents/HomeRightCards";

import { CreaUnPost } from "./HomeComponents/CreaUnPost";
import { LeftFixedCard } from "./HomeComponents/LeftFixedCard";

import { HomeRightCards } from "./HomeComponents/HomeRightCards";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar/searchbarfetch";

export const Home = () => {
  const [scrollTop, setScrollTop] = useState(0); // TENTATIVO PER SCROLL DINAMICO DEI POST

  const [postCounter, setPostCounter] = useState(5);
  const [titles, setTitles] = useState([]);
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
    const data = await fetchPosts();
    setTitles(() => {
      return data.slice(0, 10);
    });

    setFriendsPosts((prev) => {
      return [
        ...prev,
        ...data
          .filter((post) =>
            friendsArray.map((friend) => friend?._id).includes(post.user?._id)
          )
          .reverse(),
      ];
    });
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
              <SearchBar />
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
              {friendsPosts?.length === 0 ? (
                <div className="text-center mt-5">
                  <Spinner variant="primary" />
                </div>
              ) : (
                friendsPosts.slice(0, postCounter).map((post, i) => {
                  return (
                    <PostLinkedin
                      key={"post-" + i}
                      post={post}
                      retrievePosts={retrieveAllRecentPostsFriends}
                    />
                  );
                })
              )}
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

// for (let i = 0; i < data.length; i++) {
//   const post = data[i];
//   for (let j = 0; j < friendsArray.length; j++) {
//     const friend = friendsArray[j];
//     console.log(post.user._id, friend._id);
//     // console.log(post?.user?._id);
//     if (post.user.username === friend.username) {
//       postAmici.push(post);
//     }
//   }
// }
