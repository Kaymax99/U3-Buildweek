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
        Authorization: "Bearer " + process.env.REACT_APP_MYTOKEN,
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
