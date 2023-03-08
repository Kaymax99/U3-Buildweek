const BaseURL = "https://striveschool-api.herokuapp.com/api/comments/";


//GET DI TUTTI I COMMENTI//

export const FetchComments = async () => {
    try {
      const response = await fetch(BaseURL, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + process.env.REACT_APP_MYTOKEN_COMMENTS,
        },
      });
      if (response.ok) {
        const data = await response.json();
        // console.log(data);
        return data;
      } else {
        console.log("La risposta non è corretta", response.status);
      }
    } catch (error) {
      console.log("Errore Catch", error);
    }
  };





//PROVA FUNZIONANTE//

  // import React, { useState, useEffect } from "react";

// function FetchComments() {
//   const [comments, setComments] = useState([]);

//   useEffect(() => {
//     fetch("https://striveschool-api.herokuapp.com/api/comments/", {
//       method: "GET",
//       headers: {
//         Authorization: "Bearer " + process.env.REACT_APP_MYTOKEN_COMMENTS,
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => setComments(data))
//       .catch((error) => console.error(error));
//   }, []);

//   return (
//     <div>
//       {comments.map((comment) => (
//         <div key={comment._id}>
//           <h4>{comment.author}</h4>
//           <p>{comment.comment}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default FetchComments;
