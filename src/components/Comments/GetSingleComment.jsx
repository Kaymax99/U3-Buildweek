//Fetch per recuperare il singolo commento//
//Se in un post non ci sarà alcun commento, allora apparirà nel form "Nessun Commento"//

import React, { useEffect, useState } from "react";

function Comment({ commentId }) {
  const [comment, setComment] = useState(null);

  useEffect(() => {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${commentId}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + process.env.REACT_APP_MYTOKEN,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const foundComment = data.find((comment) => comment._id === commentId);
        setComment(foundComment);
      })
      .catch((error) => console.error(error));
  }, [commentId]);

  if (!comment) {
    return <div>Nessun Commento</div>;
  }

  return (
    <div>
      <h2>{comment.author}</h2>
      <p>{comment.comment}</p>
    </div>
  );
}

export default Comment;
