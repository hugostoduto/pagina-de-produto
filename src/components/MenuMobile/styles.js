import styled, { css } from "styled-components";
const menu = {
  close: (theme) => css`
    .open-button-container {
      transition: 0.5s ease-in-out;

      transform: translateY(0px);
    }
    .menu-mobile {
      position: absolute;
      border-radius: 30px 30px 0px 0px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: ${theme.colors.white};
      padding: 10px;
      bottom: 0;
      width: 10%;
      height: 350px;
      margin-top: 0px;
      transition: 0.5s ease-in-out;

      transform: translateY(460px);
    }
  `,
  open: (theme) => css`
    .open-button-container {
      transition: 0.5s ease-in-out;

      transform: translateY(460px);
    }
    .menu-mobile {
      position: absolute;
      border-radius: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: ${theme.seconderyBg};
      padding: 10px;
      bottom: 0;
      width: 85%;
      height: 350px;
      margin-top: 0px;
      transition: 0.5s ease-in-out;
      -webkit-box-shadow: 3px 10px 25px -8px rgba(0, 0, 0, 0.54);
      -moz-box-shadow: 3px 10px 25px -8px rgba(0, 0, 0, 0.54);
      box-shadow: 3px 10px 25px -8px rgba(0, 0, 0, 0.54);
      transform: translateY(0px);
      margin-bottom: 20px;
    }
  `,
};

export const MenuMobile = styled.div`
  ${({ theme, isOpen }) => css`
    position: relative;
    display: flex;
    width: 100%;
    height: fit-content;
    align-items: center;
    justify-content: end;
    flex-direction: column;

    .menu-mobile-button {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 50px;
      width: 80%;
      background-color: ${theme.colors.pink};
      margin: 10px 0px;
      border-radius: 20px;
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.small};
      text-decoration: none;
      color: ${theme.colors.white};
      transition: 0.2s;
      box-sizing: border-box;
      position: relative;
    }
    .open-button {
      margin: 20px 0px;
      padding: 10px;
      color: ${theme.colors.white};
      background-color: ${theme.colors.pink};
      border-radius: 40px;
      bottom: 0px;
      left: 0px;
      right: 0px;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 120px;
      cursor: pointer;
      font-size: 1.4rem;
    }
    .close-button {
      background-color: ${theme.colors.pink};
      border-radius: 100%;
      padding: 10px;
      color: ${theme.colors.white};
    }
    ${menu[isOpen](theme)}
  `};
`;
