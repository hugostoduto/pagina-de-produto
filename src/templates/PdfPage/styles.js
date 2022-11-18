import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    .pdf-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `}
`;
