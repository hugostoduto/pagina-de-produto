import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    width: 95%;
    padding: 30px 0px;
    border-radius:50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${theme.seconderyBg};
    .shelf-display-header {
      display: flex;
      align-items: center;
    }

    .shelf-display-d {
      width: 50px;
      height: 50px;
    }
    .shelf-display-header hr {
      height: 30px;
      margin: 0px 10px;
      border: 1px solid ${theme.colors.gray};
    }
    .shelf-slider-container {
      display: flex;
      align-items: center;
      width: 100%
      justify-content: space-between;
    }
    .shelf-slider-container-mobile {
      position: relative;
      
      align-items: center;
      width: 100%
      justify-content:center;
      display: none;
    }
    .shelf-slider {
      display: flex;
      width: 680px;
      overflow-x: scroll;
      scroll-behavior: smooth;
    }
    .shelf-slider::-webkit-scrollbar {
      display: none;
    }
    @media ${theme.media.medium}{
      .shelf-slider-container-mobile {
        display: flex;
      }
      .shelf-slider-container {
        display: none;
      }
      .shelf-display-header {
        
        text-align: center;
        flex-direction:column;
      }
      .shelf-display-header hr {
        height: 0px;
        margin: 10px 0px;
        width: 30px;
      }
    }
    @media ${theme.media.xsmall}{
      width: 100%;
      border-radius:20px;
      .arrow-display-left{
        position: absolute;
        z-index:100;
        
        left: 10px;
      }
      .arrow-display-right{
        position: absolute;
        z-index:100;
        
        right: 10px;
      }
      .shelf-display-header {
        
        text-align: center;
        flex-direction:column;
      }
      .shelf-display-header hr {
        height: 0px;
        margin: 10px 0px;
        width: 30px;
      }
      
      
    }
  `}
`;
