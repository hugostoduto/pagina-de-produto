import React from "react";
import "./style.css";

const ProductImage = ({ pdpImage }) => {
  return pdpImage.includes(".mp4") ? (
    <video
      type="video/mp4"
      muted="muted"
      loop="loop"
      autoPlay="autoPlay"
      playsInline="playsInline"
      className="image"
      src={pdpImage}
    ></video>
  ) : (
    <img className="image" src={pdpImage} alt={pdpImage} />
  );
};

export default ProductImage;
