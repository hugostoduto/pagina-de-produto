import styled, { css } from "styled-components";
const accordion = {
  close: (theme) => css`
    .open-accordion {
      display: flex;
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.pink};
    }
    .close-accordion {
      display: none;
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.pink};
    }
    .accordion-text {
      display: none;
    }
  `,
  open: (theme) => css`
    .open-accordion {
      display: none;
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.pink};
    }
    .close-accordion {
      display: flex;
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.pink};
    }
    .accordion-text {
      display: flex;
    }
  `,
};
export const Container = styled.div`
  ${({ theme, isOpen }) => css`
    ${accordion[isOpen](theme)}
    .accordion-container {
      flex-direction: column;
      margin: 20px 0px;
      display: flex;
      align-items: center;
    }
    .accordion-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 50px;
      width: 100%;
      background-color: ${theme.mainBg};
      padding: 20px;
    }
    .accordion-text {
      z-index: 0;
      padding: 20px;
      align-items: center;
      border-radius: 0px 0px 10px 10px;
      height: fit-content;
      text-align: left;
      width: 100%;
      transition: 0.2s ease;
      background-color: ${theme.seconderyBg};
    }
    @media ${theme.media.medium} {
      width: 100%;
    }
  `};
`;
