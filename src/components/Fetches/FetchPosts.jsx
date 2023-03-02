const BaseURL = "https://striveschool-api.herokuapp.com/api/posts/";

// FETCH PER RECUPERARE TUTTI I POST

export const fetchPosts = async () => {
  try {
    const response = await fetch(BaseURL, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + process.env.REACT_APP_MYTOKEN,
      },
    });
    if (response.ok) {
      const data = await response.json();
      // console.log(data);
      return data;
    } else {
      console.log("Response is not OK", response.status);
    }
  } catch (error) {
    console.log("ERRORE CATCH", error);
  }
};

// FETCH PER RECUPERARE UN SINGOLO POST

export const fetchPostById = async (postId) => {
  if (postId) {
    try {
      const response = await fetch(BaseURL + postId, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + process.env.REACT_APP_MYTOKEN,
        },
      });
      if (response.ok) {
        const data = await response.json();
        // console.log(data);
        return data;
      } else {
        console.log("Response is not OK", response.status);
      }
    } catch (error) {
      console.log("ERRORE CATCH", error);
    }
  }
};

// FETCH PER AGGIUNGERE UN POST
// DATA DEVE ESSERE UN OGGETTO CON PROPRIETA' "text" ⚠️

export const addPost = async (data) => {
  try {
    const response = await fetch(BaseURL, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + process.env.REACT_APP_MYTOKEN,
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const data = await response.json();

      return data;
    } else {
      console.log("Response is not OK", response.status);
    }
  } catch (error) {
    console.log("ERRORE CATCH", error);
  }
};

// FETCH PER MODIFICARE UN POST
// DATA DEVE ESSERE UN OGGETTO CON PROPRIETA' "text" ⚠️

export const editPost = async (data) => {
  try {
    const response = await fetch(BaseURL, {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + process.env.REACT_APP_MYTOKEN,
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const data = await response.json();

      return data;
    } else {
      console.log("Response is not OK", response.status);
    }
  } catch (error) {
    console.log("ERRORE CATCH", error);
  }
};

// FETCH PER CANCELLARE UN POST

export const deletePost = async (postId) => {
  try {
    const response = await fetch(BaseURL + postId, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + process.env.REACT_APP_MYTOKEN,
      },
    });
    if (!response.ok) {
      console.log("Response is not OK", response.status);
      //  const data = await response.json();
      return false;
    } else return true;
  } catch (error) {
    console.log("ERRORE CATCH", error);
  }
};
