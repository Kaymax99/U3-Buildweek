const BaseURL = "https://striveschool-api.herokuapp.com/api/posts/";

export const fetchPosts = async () => {
  try {
    const response = await fetch(BaseURL, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + process.env.REACT_APP_MYTOKEN,
      },
    });
    if (response.ok) {
      const data = await response.json();
      // console.log(data);
      return data;
    } else {
      console.log("Response is not OK", response.status);
    }
  } catch (error) {
    console.log("ERRORE CATCH", error);
  }
};

export const addPost = async (data) => {
  try {
    const response = await fetch(BaseURL, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + process.env.REACT_APP_MYTOKEN,
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const data = await response.json();

      return data;
    } else {
      console.log("Response is not OK", response.status);
    }
  } catch (error) {
    console.log("ERRORE CATCH", error);
  }
};
