import P from "prop-types";
import * as Styled from "./styles";
import React from "react";
import ProductImage from "../../components/ProductImage/ProductImage";
import ProductTitle from "../../components/ProductTitle/ProductTitle";
import { data } from "../../colecao-brenda";

export const PdfPage = () => {
  return (
    <Styled.Container>
      <div className="pdf-container">
        <div className="pdf-image">
          {data.map((product) =>
            product.images
              .filter((image) => image.image.includes(".jpg"))
              .map((filteredImage) => (
                <ProductImage pdpImage={filteredImage.image} />
              ))
          )}
        </div>
        {data.map((product) => (
          <ProductTitle
            productName={product.name}
            productCollection={product.colection}
            productDescription={product.description}
            productColors={product.colors}
            productSizes={product.sizes}
            productReference={product.id}
          />
        ))}
      </div>
    </Styled.Container>
  );
};

PdfPage.propTypes = {
  children: P.node.isRequired,
};
export default PdfPage;
