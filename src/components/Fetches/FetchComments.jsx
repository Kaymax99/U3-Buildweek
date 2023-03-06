const BaseURL = "https://striveschool-api.herokuapp.com/api/comments/";

// FETCH DEI COMMENTI DI UN POST

export const GetComments = async (postId) => {
  fetch(BaseURL + postId, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + process.env.REACT_APP_MYTOKEN_COMMENTS,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.error(error));
};

//POST DI UN COMMENTO

export const PostComments = async ({ comment }) => {
  try {
    const response = await fetch(BaseURL, {
      method: "POST",
      body: {
        ...comment,
      },
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
