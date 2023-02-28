export const EditProfile = async (newProfileObj, callbackFn) => {
  const baseUrl = `https://striveschool-api.herokuapp.com/api/profile/`;
  try {
    const res = await fetch(baseUrl, {
      method: "PUT",
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
