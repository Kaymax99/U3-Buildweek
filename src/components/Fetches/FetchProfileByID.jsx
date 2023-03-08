export const fetchProfiles = async () => {
  try {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/",
      {
        headers: {
          Authorization: "Bearer " + process.env.REACT_APP_MYTOKEN,
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const FetchProfileByID = async (idProfile) => {
  let BaseUrl = `https://striveschool-api.herokuapp.com/api/profile/${idProfile}/`;

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
