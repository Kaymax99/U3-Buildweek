const FetchProfileByID = async (idProfile) => {
  try {
    const BaseUrl = `https://striveschool-api.herokuapp.com/api/profile/${idProfile}`;

    const response = await fetch(BaseUrl, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNmMzMmYxOTNlNjAwMTM4MDdmNTQiLCJpYXQiOjE2Nzc0ODcxNTQsImV4cCI6MTY3ODY5Njc1NH0.2ECzMWzAgGsIanmD5-fjCC-hmXzrHd0Xgq_o4L9_MQ8",
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

export default FetchProfileByID;
