import styled, { css } from "styled-components";

const titleSize = {
  small: (theme) => css`
    font-size: ${theme.font.sizes.xsmall};
  `,
  medium: (theme) => css`
    font-size: ${theme.font.sizes.small};
  `,
  big: (theme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  huge: (theme) => css`
    font-size: ${theme.font.sizes.large};
  `,
};

export const Container = styled.p`
  ${({ theme, size }) => css`
    ${titleSize[size](theme)};
  `}
`;
