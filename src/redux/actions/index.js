export const GET_PROFILE = "GET_PROFILE";
export const GET_PEOPLE = "GET_PEOPLE";
export const GET = "GET";
export const POST = "POST";
export const PUT = "PUT";
export const DELETE = "DELETE";
export const ADD_TO_FRIENDS = "ADD_TO_FRIENDS";
export const REMOVE_FROM_FRIENDS = "REMOVE_FROM_FRIENDS";

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

export const addToFriendsAction = (friend) => {
  return (dispatch, getState) => {
    const currentState = getState();

    if (
      currentState.friends.content.findIndex(
        (person) => person._id === friend._id
      ) === -1
    ) {
      dispatch({
        type: ADD_TO_FRIENDS,
        payload: friend,
      });
    }
  };
};

export const removeFromFriendsAction = (id) => ({
  type: REMOVE_FROM_FRIENDS,
  payload: id,
});
