const FetchExperience = async (idProfile) => {
  try {
    const BaseUrl = `https://striveschool-api.herokuapp.com/api/profile/${idProfile}/experiences`;

    const response = await fetch(BaseUrl, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNzZiM2YxOTNlNjAwMTM4MDdmNWMiLCJpYXQiOjE2Nzc0ODk4NDYsImV4cCI6MTY3ODY5OTQ0Nn0.-q5P2Ax3mO5nMG15FKAyvQeJ_Krlmy2Z-VmSSdBuRQ0",
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

export default FetchExperience;
