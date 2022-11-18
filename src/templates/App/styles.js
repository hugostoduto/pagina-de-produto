import styled, { css } from "styled-components";

export const Container = styled.div`
  ${(theme) => css`
    height: 100vh;
    padding: 30px 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    scroll-behavior: smooth;
  `}
`;
