import P from "prop-types";
import * as Styled from "./styles";
import React from "react";

export const Heading = ({
  children,
  as = "h1",
  size = "big",
  color = "black",
}) => {
  return (
    <Styled.Title color={color} size={size} as={as}>
      {children}
    </Styled.Title>
  );
};

Heading.propTypes = {
  children: P.string.isRequired,
  as: P.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]).isRequired,
  size: P.oneOf(["big", "small", "medium", "huge"]),
  color: P.oneOf(["black", "gray", "white"]),
};
