import React, { useState } from "react";

function PostComment() {
  const [comment, setComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`https://striveschool-api.herokuapp.com/api/comments`, {
      method: "POST",
      headers: { Authorization: "Bearer " + process.env.REACT_APP_MYTOKEN },
      body: JSON.stringify({ comment }),
    })
      .then((response) => {
        if (response.ok) {
          setComment("");
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="comment">Comment</label>
        <textarea id="comment" value={comment} onChange={(event) => setComment(event.target.value)}></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default PostComment;
