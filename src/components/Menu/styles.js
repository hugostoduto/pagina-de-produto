import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme, active }) => css`
    .menu-container {
      display: flex;
      justify-content: start;
      align-items: center;
      box-sizing: border-box;
    }
    .menu-button {
      width: fit-content;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px 10px;
    }
    .menu-button a {
      text-decoration: none;
      color: ${theme.colors.black};
      transition: 0.2s;
      box-sizing: border-box;
      position: relative;
      font-size: ${theme.font.sizes.small};
      font-size: 1.8rem;
    }
    .menu-button a::before {
      content: "";
      position: absolute;
      width: 0%;
      height: 2px;
      left: 50%;
      bottom: -5px;
      background-color: ${theme.colors.pink};
      transition: 0.3s all ease-in-out;
    }
    .menu-button a:hover::before {
      width: 100%;
      left: 0;
    }
  `}
`;
