import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    width: 95%;
    padding: 30px 0px;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .shareKit-header {
      display: flex;
      align-items: center;
    }

    .shareKit-d {
      width: 50px;
      height: 50px;
    }
    .shareKit-header hr {
      height: 30px;
      margin: 0px 10px;
      border: 1px solid ${theme.colors.gray};
    }
    .sharekit-contaier {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 30px 0px;
      box-sizing: border-box;
    }
    .shareKit-banner {
      width: 400px;
      height: 400px;
      overflow: hidden;
      border-radius: 20px;
    }
    .shareKit-img {
      width: 400px;
      height: 400px;
      object-fit: cover;
    }
    .sharekit-textContainer {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      border-radius: 20px;
      position: relative;
      margin-left: 15px;
      height: 400px;
      width: 400px;
      color: ${theme.colors.black};
      box-sizing: border-box;
      border-radius: 20px;
      background-color: ${theme.seconderyBg};
    }

    .sharekit-text {
      height: 65%;
      width: 90%;
    }
    .sharekit-text hr {
      margin-top: 5px;
      width: 100%;
      border-top: 3px solid #ce2680;
    }
    .sharekit-text h1 {
      font-weight: 700;
      color: #000000;
    }
    .sharekit-text li {
      font-size: 1rem;
      color: #333333;
      margin: 10px 0px;
    }
    .sharekit-text ul {
      width: 90%;
      margin-left: 30px;
      margin-top: 20px;
    }

    .shareKit-button {
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 3px;
      border: none;
      padding: 0;
      width: 80%;
      height: 50px;
      background: #e23090;
      text-transform: uppercase;
      color: #fff;
      font-weight: 700;
      text-align: center;
      text-decoration: none;
      line-height: 40px;
      cursor: pointer;
      font-size: ${theme.font.sizes.big};
    }
    .shareKit-button:hover {
      background: #ce2680;
    }
    @media ${theme.media.medium} {
      .sharekit-contaier {
        flex-direction: column;
        border-radius: 20px;
      }
      .sharekit-textContainer {
        margin-left: 0px;
        margin-top: 30px;
      }
    }

    @media ${theme.media.small} {
      .sharekit-textContainer {
        width: 370px;
      }
      .shareKit-banner {
        width: 370px;
      }
      .sharekit-contaier {
        border-radius: 20px;
      }
      .shareKit-header {
        flex-direction: column;

        text-align: center;
      }

      .shareKit-d {
        width: 50px;
        height: 50px;
      }
      .shareKit-header hr {
        height: 0px;
        margin: 10px 0px;
        width: 30px;
      }
      .shreKit-text-header {
        text-align: center;
      }
    }
    @media ${theme.media.xsmall} {
      .shareKit-banner {
        width: 300px;
      }
      .sharekit-textContainer {
        width: 300px;
      }
      .shareKit-img {
        width: 300px;
      }
    }
  `}
`;
