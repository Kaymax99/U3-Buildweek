export const FetchProfileByID = async (idProfile) => {
  let BaseUrl = `https://striveschool-api.herokuapp.com/api/profile/${idProfile}/`;
  if (idProfile === "me") {
    BaseUrl = "https://striveschool-api.herokuapp.com/api/profile/me";
  }

  try {
    const response = await fetch(BaseUrl, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + process.env.REACT_APP_MYTOKEN,
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
