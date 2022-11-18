import P from "prop-types";

import React from "react";
import { Heading } from "../Heading/Heading";
import * as Styled from "./styles";
import { TextComponent } from "../TextComponent/TextComponent";
import Accordion from "../Accordion/Accordion";

export const ProductTitle = ({
  productName = "Nome do produto",
  productReference = 831320,
  productCollection = "brenda",
  productDescription = "descrição do produto",
  productColors = {},
  productSizes = {},
}) => {
  return (
    <Styled.Container>
      <div className="product-info">
        <Heading children={productName} as="h3" size="medium" />
        <hr />

        <div className="product-reference">
          <TextComponent size="medium">
            Coleção: <strong>{productCollection}</strong> | Ref.:{" "}
            <strong>
              <span>{productReference}</span>
            </strong>
          </TextComponent>
        </div>
        <div className="mobile-description">
          <Accordion
            title="Descrição"
            text={<TextComponent size="medium" children={productDescription} />}
          />
          <Accordion
            title="Tamanhos"
            text={
              <div className="sizes">
                {productSizes.map((size) => {
                  return (
                    <p key={size.code} className="size">
                      {size.code}
                    </p>
                  );
                })}
              </div>
            }
          />
          <Accordion
            title="Cores"
            text={
              <div className="colors">
                {productColors.map((color) => {
                  return (
                    <p
                      key={color.code}
                      className="color"
                      style={{
                        backgroundColor: `${color.cor}`,
                        color: `${color.fontColor}`,
                      }}
                    >
                      {color.code}
                    </p>
                  );
                })}
              </div>
            }
          />
        </div>

        <div className="product-description">
          <TextComponent size="medium" children={productDescription} />
        </div>

        <div className="product-colors">
          <h3>cores:</h3>
          <div className="colors">
            {productColors.map((color) => {
              return (
                <p
                  key={color.code}
                  className="color"
                  style={{
                    backgroundColor: `${color.cor}`,
                    color: `${color.fontColor}`,
                  }}
                >
                  {color.code}
                </p>
              );
            })}
          </div>
        </div>
        <div className="product-sizes">
          <h3>Tamanhos:</h3>
          <div className="sizes">
            {productSizes.map((size) => {
              return (
                <p key={size.code} className="size">
                  {size.code}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </Styled.Container>
  );
};

ProductTitle.propTypes = {
  productName: P.string.isRequired,
  ProductCollection: P.string.isRequired,
  productReference: P.number.isRequired,
  ProductDescription: P.string.isRequired,
  productColors: P.node.isRequired,
  productSizes: P.node.isRequired,
};
export default ProductTitle;
