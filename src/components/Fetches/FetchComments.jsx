const BaseURL = "https://striveschool-api.herokuapp.com/api/comments/";

// FETCH DEI COMMENTI DI UN POST

export const GetComments = async (id, type) => {
  try {
    const res = await fetch(BaseURL + id, {
      method: type,
      headers: {
        Authorization: "Bearer " + process.env.REACT_APP_MYTOKEN_COMMENTS,
      },
    });
    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      console.log("AIUTO!!", res.response);
    }
  } catch (error) {
    console.log(error);
  }
};

//POST DI UN COMMENTO

export const PostComments = async (props, type, postID) => {
  // console.log(props);
  // console.log(type);
  try {
    const response = await fetch(BaseURL + postID, {
      method: type,
      body: JSON.stringify(props),
      headers: {
        Authorization: "Bearer " + process.env.REACT_APP_MYTOKEN_COMMENTS,
        "Content-Type": "application/json",
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
