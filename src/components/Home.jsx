import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import {
  addPost,
  fetchPosts,
  fetchPostById,
  deletePost,
} from "./Fetches/FetchPosts";

export const Home = () => {
  const [posts, setPosts] = useState(null);
  const [postContent, setPostContent] = useState({});
  const [singlePost, setSinglePost] = useState(null);
  const numeroPost = 10;
  const retrievePosts = async () => {
    const data = await fetchPosts();
    let indexRandom = Math.floor(Math.random() * (data.length - numeroPost));
    setPosts(data.slice(indexRandom, indexRandom + numeroPost));
    // setPosts(data);
  };
  console.log(posts);
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
        <div>
          <ul>
            {posts && posts?.map((e, index) => <li key={index}>{e.text}</li>)}
          </ul>
        </div>
        <div>
          <form>
            <input
              onChange={(e) => {
                console.log(e.target.value);
                setPostContent({ text: e.target.value });
              }}
              type="text"
              name=""
              id=""
            />
            <button
              onClick={(e) => {
                addPost(postContent);
                e.preventDefault();
              }}
            >
              INVIA
            </button>
            <button
              onClick={(e) => {
                deleteSinglePost(singlePost?.text);
                e.preventDefault();
              }}
            >
              CANCELLA
            </button>
          </form>
          <p>{singlePost?.text}</p>
        </div>
      </Container>
    </>
  );
};
