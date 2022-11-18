import styled, { css } from "styled-components";
import deskTopImg from "./Logo-Preto.png";
import mobileImg from "./Dvermelho.png";

const menuFixed = {
  fixed: (theme) => css`
    .header-container {
      position: fixed;
      width: 100%;
      background-color: ${theme.seconderyBg};
      height: 100px;
      display: flex;
      box-sizing: border-box;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      scroll-behavior: smooth;
      z-index: 1000;
      transition: all 1s ease-in-out;
      box-shadow: 0px 5px 30px #00000040;
    }
    .logo {
      width: 150px;
      height: 90px;
      background-image: url(${mobileImg});
      background-position: center; /* Center the image */
      background-repeat: no-repeat; /* Do not repeat the image */
      background-size: contain; /* Resize the background image to cover the entire container */
    }
  `,
  noFixed: (theme) => css`
    .header-container {
      position: sticky;

      width: 100%;
      background-color: ${theme.mainBg};
      height: 150px;
      display: flex;
      box-sizing: border-box;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      scroll-behavior: smooth;
      z-index: 1000;
      transition: all 0.3s ease-in-out;
    }
    .logo {
      width: 170px;
      height: 100px;
      background-image: url(${deskTopImg});
      background-position: center; /* Center the image */
      background-repeat: no-repeat; /* Do not repeat the image */
      background-size: contain; /* Resize the background image to cover the entire container */
    }
  `,
};

export const Container = styled.header`
  ${({ theme, isFixed }) => css`
    ${menuFixed[isFixed](theme)}
    .menu {
      display: block;
    }
    .menu-mobile {
      display: none;
    }
    @media ${theme.media.medium} {
      .header-container {
        justify-content: center;
        height: 100px;
      }
      .menu-mobile {
        display: block;
      }
      .menu {
        display: none;
      }
    }
    @media ${theme.media.small} {
      .logo {
        background-image: url(${mobileImg});
      }
    }
  `}
`;
