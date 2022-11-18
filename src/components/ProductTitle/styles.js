import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: center;
    .product-info hr {
      width: 100%;
      border: 1px solid ${theme.colors.pink};
    }
    .product-info {
      display: flex;
      justify-content: center;
      flex-direction: column;
      text-align: left;
      width: 560px;
      margin-top: 10px;
    }
    .product-name {
      margin: 5px 0px;
      font-weight: 700;
      font-size: 0.9rem;
      color: #000000;
    }

    .product-reference {
      font-weight: 400;
      font-size: 1rem;
      color: #333333;
      margin: 10px 0px;
    }
    .product-description {
      font-weight: 400;
      font-size: 1rem;
      color: #333333;
    }
    .product-colors,
    .product-sizes {
      box-sizing: border-box;
      margin: 20px 0px;
      display: flex;
      flex-direction: column;
      width: 560px;
      align-items: start;
      justify-content: flex-start;
      font-size: ${theme.font.sizes.small};
    }
    .colors,
    .sizes {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      flex-wrap: wrap;
    }
    .size {
      display: flex;
      font-size: ${theme.font.sizes.small};
      align-items: center;
      justify-content: center;
      color: #ffffff;
      background-color: #1d1d1d;
      border: solid 2px #c0c0c0;
      text-transform: uppercase;
      width: 35px;
      height: 35px;
      border-radius: 100%;
      margin: 0px 5px;
    }
    .color {
      border: solid 1px #000000;
      font-weight: 400;
      font-size: ${theme.font.sizes.small};
      color: #ffffff;
      border-radius: 10px;
      margin: 5px 5px;
      padding: 2px 8px;
    }

    .mobile-description {
      display: none;

      flex-direction: column;
      justify-content: center;
      width: 100%;
    }
    @media ${theme.media.medium} {
      .product-description,
      .product-colors,
      .product-sizes {
        display: none;
      }

      .mobile-description {
        display: flex;
      }
      .product-name {
        font-size: 0.7rem;
      }
      .product-info {
        text-align: center;

        display: flex;
        flex-direction: column;
      }

      .product-reference {
        font-size: 0.8rem;
      }
      .product-colors,
      .product-sizes {
        flex-direction: column;
        width: 90%;
        align-items: center;
      }
      .colors {
        margin-left: 0px;
      }
      .size {
        margin-top: 5px;
        font-size: ${theme.font.sizes.xsmall};
      }
      .color {
        margin-top: 5px;
        font-size: ${theme.font.sizes.xsmall};
      }
      .product-colors,
      .product-sizes {
        margin: 10px 0px;
        width: 100%;
        font-size: ${theme.font.sizes.small};
      }
    }
    @media ${theme.media.small} {
      .product-info {
        width: 95%;
      }
    }
  `}
`;
