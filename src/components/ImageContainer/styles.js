import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: center;
    .product-image-container {
      display: flex;
      position: relative;
      align-items: center;
      justify-content: center;
      height: 500px;
      width: 560px;
    }
    .product-image-mobile {
      position: relative;
      align-items: center;
      justify-content: center;
      height: 500px;
      display: none;
      width: 260px;
    }
    .arrows {
      position: absolute;
      display: flex;
      justify-content: space-between;
      z-index: 100;
      width: 95%;
    }
    .thumb-container {
      position: relative;
      display: flex;
      width: 100%;
      align-items: center;
      overflow-x: auto;
      scroll-behavior: smooth;
    }
    .thumb-container::-webkit-scrollbar {
      display: none;
    }
    .image-thumb {
      display: flex;
      position: relative;
      transition: 0.5s;
    }
    .dots {
      position: absolute;
      z-index: 100;
      display: flex;
      bottom: 0;
      right: 0;
      background-color: #f1f1f1;
    }
    .dot {
      font-size: 30px;
      color: #f1f1f1;
    }
    .product__zoom img {
      width: calc(100% - 60px);
      height: auto;
      max-width: unset;
      max-height: unset;
      margin: 0 auto;
      display: block;
    }
    @media (max-width: 960px) {
      .product-image-container {
        display: flex;
      }
      .product-image-mobile {
        display: none;
      }
    }
    @media (max-width: 720px) {
      .product-image-container {
        display: flex;
      }
      .product-image-mobile {
        display: none;
      }
    }
    @media (max-width: 568px) {
      .product-image-container {
        display: none;
      }
      .product-image-mobile {
        display: flex;
      }
    }
  `}
`;
