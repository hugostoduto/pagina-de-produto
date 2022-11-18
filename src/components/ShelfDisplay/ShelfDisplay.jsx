import P from "prop-types";
import * as Styled from "./styles";
import LogoDuloren from "./D45x45.png";
import ShelfCard from "../ShelfCard/ShelfCard";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Heading } from "../Heading/Heading";
import { useRef, useState } from "react";

export const ShelfDisplay = ({ product, banner }) => {
  const length = product.length;
  const slider = useRef(null);

  const [curretImage, setCurrentImage] = useState(0);
  const nextSlide = () => {
    setCurrentImage(curretImage === length - 1 ? 0 : curretImage + 1);
  };
  const prevSlide = () => {
    setCurrentImage(curretImage === 0 ? length - 1 : curretImage - 1);
  };

  const next = () => {
    slider.current.scrollLeft += slider.current.offsetWidth;
  };
  const prev = () => {
    slider.current.scrollLeft -= slider.current.offsetWidth;
  };
  return (
    <Styled.Container>
      <div id="outros-modelos" className="shelf-display-header">
        <img className="shelf-display-d" src={LogoDuloren} alt="Logo Duloren" />{" "}
        <hr />
        <Heading
          color="gray"
          children="Outros Produtos da Coleção"
          as="h1"
          size="medium"
        />
      </div>

      <div className="shelf-slider-container">
        <MdKeyboardArrowLeft
          onClick={prev}
          style={{
            cursor: "pointer",
            display: `${length > 0 ? "block" : " none"}`,
          }}
          size={50}
        />
        <div ref={slider} className="shelf-slider">
          {product.map((product, id) => (
            <div className="">
              <ShelfCard
                productImage={product.image}
                productName={product.name}
                productReference={product.ref}
                productLink={product.link}
              />
            </div>
          ))}
        </div>
        <MdKeyboardArrowRight
          onClick={next}
          style={{
            cursor: "pointer",
            display: `${length > 0 ? "block" : " none"}`,
          }}
          size={50}
        />
      </div>
      {/* mobile */}
      <div className="shelf-slider-container-mobile">
        <MdKeyboardArrowLeft
          onClick={prevSlide}
          className="arrow-display-left"
          style={{
            cursor: "pointer",
            display: `${length > 0 ? "block" : " none"}`,
          }}
          size={50}
        />

        {product.map(
          (product, id) =>
            id === curretImage && (
              <ShelfCard
                productImage={product.image}
                productName={product.name}
                productReference={product.ref}
                productLink={product.link}
              />
            )
        )}

        <MdKeyboardArrowRight
          onClick={nextSlide}
          className="arrow-display-right"
          style={{
            cursor: "pointer",
            display: `${length > 0 ? "block" : " none"}`,
          }}
          size={50}
        />
      </div>
    </Styled.Container>
  );
};

ShelfDisplay.propTypes = {
  product: P.node.isRequired,
  banner: P.string.isRequired,
};

export default ShelfDisplay;
