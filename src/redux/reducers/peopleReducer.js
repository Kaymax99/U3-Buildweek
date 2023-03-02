import { GET_PEOPLE } from "../actions/index.js";

const initialState = {
  content: [],
};

export const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PEOPLE:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};
