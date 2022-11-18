/* import "./style.css"; */
import ProductImage from "../ProductImage/ProductImage";
import * as Styled from "./styles";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useRef, useState } from "react";

export const ImageContainer = ({ images }) => {
  const imgNum = images.length;

  const [image, setImage] = useState(0);
  const [curretImage, setCurrentImage] = useState(0);

  const carrossel = useRef(null);

  const next = () => {
    if (imgNum >= 0) {
      setCurrentImage(curretImage + 1);
      setImage(image + 280);
    }
    if (curretImage + 2 >= imgNum) {
      setCurrentImage(0);
      setImage(image * 0);
    }
  };

  const prev = () => {
    if (curretImage >= -1) {
      setCurrentImage(0);
      setImage(image * 0);
    }
    if (curretImage >= 1) {
      setImage(image - 280);
    }
  };
  const nextSlide = () => {
    setCurrentImage(curretImage === imgNum - 1 ? 0 : curretImage + 1);
  };
  const prevSlide = () => {
    setCurrentImage(curretImage === 0 ? imgNum - 1 : curretImage - 1);
  };
  return (
    <Styled.Container>
      <div className="product-image-container">
        <div className="arrows">
          <MdKeyboardArrowLeft
            style={{ cursor: "pointer" }}
            onClick={prev}
            size={50}
          />
          <MdKeyboardArrowRight
            style={{ cursor: "pointer" }}
            onClick={next}
            size={50}
          />
        </div>
        <div ref={carrossel} className="thumb-container">
          <div style={{ right: 0 + image }} className="image-thumb">
            {images.map((product, id) => {
              return <ProductImage key={product.id} pdpImage={product.image} />;
            })}
          </div>
        </div>
      </div>
      <div className="product-image-mobile">
        <div className="arrows">
          <MdKeyboardArrowLeft
            style={{ cursor: "pointer" }}
            onClick={prevSlide}
            size={50}
          />
          <MdKeyboardArrowRight
            style={{ cursor: "pointer" }}
            onClick={nextSlide}
            size={50}
          />
        </div>
        <div ref={carrossel} className="thumb-container">
          <div style={{ right: 0 + image }} className="image-thumb">
            {images.map((product, id) => {
              return (
                id === curretImage && (
                  <ProductImage key={product.id} pdpImage={product.image} />
                )
              );
            })}
          </div>
        </div>
      </div>
    </Styled.Container>
  );
};

ImageContainer.propTypes = {};

export default ImageContainer;

/* console.log(carrossel.current.scrollLeft);
carrossel.current.scrollLeft -= carrossel.current.offsetWidth; */
/* carrossel.current.scrollLeft += carrossel.current.offsetWidth;
console.log(carrossel.current.scrollLeft); */

/* <li
style={{ color: id === curretImage ? "#f1f1f1" : "#000000" }}
className="dot"
></li> */
