import { GET_PROFILE } from "../actions/index.js";

const initialState = {
  content: [],
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};
