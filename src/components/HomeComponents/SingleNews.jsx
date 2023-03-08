import { transformToDate } from "../../hooks/formatDate";

const SingleNews = ({ post }) => {
  return (
    <div className="single-news">
      <a href={`/` + post.user._id}>
        <li>
          <p>{post?.text}</p>
        </li>
      </a>
      <small>{post?.createdAt && transformToDate(post.createdAt)}</small>
    </div>
  );
};

export default SingleNews;
