import React, { useContext, useEffect } from "react";
import { ImagesContext } from "../contexts/ImagesProvider/context";
import { loadImages } from "../contexts/ImagesProvider/actions";
const Images = () => {
  const imagesContext = useContext(ImagesContext);

  const { imagesState, imagesDispatch } = imagesContext;

  useEffect(() => {
    loadImages(imagesDispatch);
  }, [imagesDispatch]);
  return (
    <div>
      <h1>Images</h1>
      {imagesState.images.map((e) => {
        return <p>{e.title}</p>;
      })}
    </div>
  );
};

export default Images;
