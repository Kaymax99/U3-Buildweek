import { Container, Row, Col, Spinner } from "react-bootstrap";
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

export const Home = () => {
  const [titles, setTitles] = useState([]);
  const [posts, setPosts] = useState([]);
  const [friendsPosts, setFriendsPosts] = useState([]);
  const friendsArray = useSelector((state) => state.friends.content);

  const retrieveAllRecentPosts = async () => {
    const data = await fetchPosts();
    setTitles(() => {
      return data.slice(0, 5);
    });
    setPosts(() => {
      return data.reverse().slice(0, 20);
    });
  };

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
              {friendsPosts?.length === 0 ? (
                <div className="text-center mt-5">
                  <Spinner variant="primary" />
                </div>
              ) : (
                friendsPosts.map((post, i) => {
                  return (
                    <PostLinkedin
                      key={"post-" + i}
                      post={post}
                      retrievePosts={retrieveAllRecentPostsFriends}
                    />
                  );
                })
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
