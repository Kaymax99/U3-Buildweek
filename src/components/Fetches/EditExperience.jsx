export const EditExperience = async (
  userID,
  expID,
  type,
  newProfileObj,
  callbackFn
) => {
  const baseUrl = `https://striveschool-api.herokuapp.com/api/profile/${userID}/experiences/${expID}`;
  try {
    const res = await fetch(baseUrl, {
      method: type,
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
