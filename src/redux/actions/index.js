export const GET_PROFILE = "GET_PROFILE";
export const GET_PEOPLE = "GET_PEOPLE";
export const GET = "GET";
export const POST = "POST";
export const PUT = "PUT";
export const DELETE = "DELETE";

export const getProfileAction = (idProfile, type) => {
  return async (dispatch, getState) => {
    try {
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${idProfile}/`,
        {
          headers: {
            Authorization: "Bearer " + process.env.REACT_APP_MYTOKEN,
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        dispatch({
          type: type,
          payload: data,
        });
      } else {
        console.log("error in profile fetch action");
      }
    } catch (error) {
      console.log("critical error in profile fetch action: " + error);
    }
  };
};
