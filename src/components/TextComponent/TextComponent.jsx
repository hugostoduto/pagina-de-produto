import P from "prop-types";
import * as Styled from "./styles";
import React from "react";

export const TextComponent = ({ children, size = "small" }) => {
  return <Styled.Container size={size}>{children}</Styled.Container>;
};

TextComponent.propTypes = {
  children: P.string.isRequired,
  size: P.oneOf(["big", "small", "medium", "huge"]),
};
