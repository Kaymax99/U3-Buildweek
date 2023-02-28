export const FetchProfileByID = async (idProfile) => {
  try {
    const BaseUrl = `https://striveschool-api.herokuapp.com/api/profile/${idProfile}`;

    const response = await fetch(BaseUrl, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNzIwMGYxOTNlNjAwMTM4MDdmNWIiLCJpYXQiOjE2Nzc0ODg2NDAsImV4cCI6MTY3ODY5ODI0MH0.H3ZUySip6xTH6Tcn37l6hNGL4xEGoaGK35Qkbu_4aSg",
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log("tutto ok", data);
      return data;
    } else {
      console.log("errore status", response.status);
    }
  } catch (error) {
    console.log("errore nella catch", error);
  }
};

export const EditProfile = async (newProfileObj, callbackFn) => {
  const baseUrl = `https://striveschool-api.herokuapp.com/api/profile/`;
  try {
    const res = await fetch(baseUrl, {
      method: "PUT",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNzIwMGYxOTNlNjAwMTM4MDdmNWIiLCJpYXQiOjE2Nzc0ODg2NDAsImV4cCI6MTY3ODY5ODI0MH0.H3ZUySip6xTH6Tcn37l6hNGL4xEGoaGK35Qkbu_4aSg",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProfileObj),
    });
    if (res.ok) {
      console.log("Successfully posted");
      callbackFn();
    } else {
      console.log("Unable to submit");
    }
  } catch (error) {
    console.log("FATAL ERROR: ", error);
  }
};
