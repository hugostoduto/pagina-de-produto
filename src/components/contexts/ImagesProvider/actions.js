import * as types from "./types";

export const loadImages = async (dispatch) => {
  const imagesRaw = await fetch("https://jsonplaceholder.typicode.com/posts");

  const images = await imagesRaw.json();

  dispatch({ type: types.IMAGES_SUCCESS, payload: images });
};
