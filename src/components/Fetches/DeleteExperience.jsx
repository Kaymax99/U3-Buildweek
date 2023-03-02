export const DeleteExperience = async (idProfile, idExperience, callbackFn) => {
  try {
    const BaseUrl = `https://striveschool-api.herokuapp.com/api/profile/${idProfile}/experiences/${idExperience}`;
    const response = await fetch(BaseUrl, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + process.env.REACT_APP_MYTOKEN,
      },
    });
    if (response.ok) {
      callbackFn();
      const data = await response;
      console.log("tutto ok: elemento rimosso:", data);
      return data;
    } else {
      console.log("errore status", response.status);
    }
  } catch (error) {
    console.log("errore nella catch", error);
  }
};
