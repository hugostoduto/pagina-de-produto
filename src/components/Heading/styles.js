import styled, { css } from "styled-components";

const titleSize = {
  small: (theme) => css`
    font-size: ${theme.font.sizes.small};
  `,
  medium: (theme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  big: (theme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  huge: (theme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
};
const textColor = {
  black: (theme) => css`
    color: ${theme.colors.black};
  `,
  gray: (theme) => css`
    color: ${theme.colors.gray};
  `,
  white: (theme) => css`
    color: ${theme.colors.white};
  `,
};

export const Title = styled.h1`
  ${({ theme, size, color }) => css`
    ${textColor[color](theme)};
    ${titleSize[size](theme)};
  `}
`;
