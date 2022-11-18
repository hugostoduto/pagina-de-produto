import P from "prop-types";
import * as Styled from "./styles";
import React from "react";
import d from "./D45x45.png";
export const ShelfCard = ({
  productName,
  productReference,
  productImage,
  productLink,
}) => {
  return (
    <Styled.Container background={d}>
      <div className="shelf-card-conatainer">
        <div key={productReference} className="shelf-card">
          <div className="d"></div>
          <img src={productImage} alt={productImage} />

          <div className="shelf-description">
            <p className="shelf-name">{productName}</p>
            <hr />
            <p className="shelf-reference">Ref.:{productReference}</p>
          </div>
          <a href={productLink} className="button-shelf">
            Ver Produto
          </a>
        </div>
      </div>
    </Styled.Container>
  );
};

ShelfCard.propTypes = {
  product: P.node.isRequired,
};

export default ShelfCard;
