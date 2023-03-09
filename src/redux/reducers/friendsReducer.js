import { ADD_TO_FRIENDS, REMOVE_FROM_FRIENDS } from "../actions";

const initialState = {
  content: [],
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FRIENDS:
      //   console.log("adding friend");
      return {
        ...state,
        content: [...state.content, action.payload],
      };
    case REMOVE_FROM_FRIENDS:
      // console.log(
      //   state.content.filter((person) => person._id === action.payload._id)
      // );
      return {
        ...state,
        content: state.content.filter(
          (person) => person._id !== action.payload._id
        ),
      };

    default:
      return state;
  }
};
