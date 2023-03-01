export const fetchPosts = async () => {
  const BaseURL = "https://striveschool-api.herokuapp.com/api/posts/";
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
