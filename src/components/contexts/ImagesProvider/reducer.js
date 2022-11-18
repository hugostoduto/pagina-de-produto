import * as types from "./types";

export const reducer = (state, action) => {
  switch (action.type) {
    case types.IMAGES_SUCCESS: {
      console.log(action.type);
      return { ...state, images: action.payload };
    }
    default:
      break;
  }

  console.log("Não encontrei a action", action.type);
  return { ...state };
};
