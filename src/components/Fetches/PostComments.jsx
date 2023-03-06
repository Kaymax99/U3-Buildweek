const BaseURL = "https://striveschool-api.herokuapp.com/api/comments/";

//GET DI TUTTI I COMMENTI//

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
