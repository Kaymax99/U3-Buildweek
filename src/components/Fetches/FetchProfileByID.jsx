export const FetchProfileByID = async (idProfile) => {
  let BaseUrl = `https://striveschool-api.herokuapp.com/api/profile/${idProfile}/`;
  if (idProfile === "me") {
    BaseUrl = "https://striveschool-api.herokuapp.com/api/profile/me";
  }

  try {
    const response = await fetch(BaseUrl, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNzIwMGYxOTNlNjAwMTM4MDdmNWIiLCJpYXQiOjE2Nzc0ODg2NDAsImV4cCI6MTY3ODY5ODI0MH0.H3ZUySip6xTH6Tcn37l6hNGL4xEGoaGK35Qkbu_4aSg",
      },
    });

    if (response.ok) {
      const data = await response.json();
      // console.log("tutto ok", data);
      return data;
    } else {
      console.log("errore status", response.status);
    }
  } catch (error) {
    console.log("errore nella catch", error);
  }
};
