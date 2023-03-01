import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { addPost, fetchPosts } from "./Fetches/FetchPosts";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [postContent, setPostContent] = useState({});
  const numeroPost = 10;
  const retrievePosts = async () => {
    const data = await fetchPosts();
    let indexRandom = Math.floor(Math.random() * (data.length - numeroPost));
    console.log(indexRandom);
    setPosts(data.slice(indexRandom, indexRandom + numeroPost));
  };

  useEffect(() => {
    retrievePosts();
  }, []);

  return (
    <>
      <Container>
        <div>
          <ul>
            {posts.map((e, index) => (
              <li key={index}>{e.text}</li>
            ))}
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
          </form>
        </div>
      </Container>
    </>
  );
};
