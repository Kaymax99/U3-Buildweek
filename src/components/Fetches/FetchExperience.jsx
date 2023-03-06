const BaseUrl = `https://striveschool-api.herokuapp.com/api/profile/`;

export const FetchExperience = async (idProfile) => {
  try {
    const response = await fetch(BaseUrl + `${idProfile}/experiences`, {
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

// https://striveschool-api.herokuapp.com/api/profile/{userId}/experiences/:expId/picture

export const EditExperienceImage = async (idProfile, formData, expID) => {
  try {
    let res = await fetch(
      BaseUrl + `${idProfile}/experiences/${expID}/picture`,
      {
        method: "POST",
        body: formData,
        headers: {
          Authorization: "Bearer " + process.env.REACT_APP_MYTOKEN,
        },
      }
    );
    if (res.ok) {
      let data = await res.json();
      return data;
    } else {
      console.log("ATTENZIONE! ", res.status);
    }
  } catch (error) {
    console.log(error);
  }
};
