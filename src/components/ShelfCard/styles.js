import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme, background }) => css`
    .shelf-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 450px;
      width: 270px;
      -webkit-box-shadow: 0px 6px 21px 1px rgba(0, 0, 0, 0.096);
      box-shadow: 0px 0px 21px 1px rgba(0, 0, 0, 0.096);
      position: relative;
      border-radius: 10px;
      margin: 20px;
      background-color: ${theme.mainBg};
    }
    .d {
      -webkit-box-shadow: 0px -17px 13px -3px rgba(0, 0, 0, 0.14);
      box-shadow: 0px -17px 13px -3px rgba(0, 0, 0, 0.14);
      position: absolute;
      width: 50px;
      height: 50px;
      background-color: ${theme.mainBg};
      border-radius: 100%;
      top: 215px;
      background-image: url(${background});
      background-position: center;
      background-repeat: no-repeat;
      background-size: 40px;
    }
    .shelf-card img {
      border-radius: 10px;
      width: 90%;
      height: 280px;
      object-fit: cover;
      margin-bottom: 20px;
    }
    .shelf-description {
      border-radius: 10px;
      background-color: ${theme.mainBg};
      align-items: center;
      padding: 10px 10px;
      width: 90%;
      text-align: left;
      font-weight: 400;
      font-size: 1.2rem;
      box-sizing: border-box;
    }
    .shelf-description hr {
      width: 100%;
      border-top: 2px solid ${theme.colors.pink};
    }
    .shelf-name {
      text-overflow: ellipsis;
      margin: 5px 0px;
      font-weight: 700;
      font-size: ${theme.font.sizes.small};
      overflow: hidden;
      color: ${theme.colors.black};
    }

    .shelf-reference {
      font-weight: 400;
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.gray};
      margin: 5px 0px;
    }

    .shelf-banner img {
      width: 300px;
      height: 500px;
      object-fit: cover;
    }
    .button-shelf {
      display: block;
      border-radius: 3px;
      border: none;
      padding: 0;
      width: 90%;
      height: 40px;
      background: #e23090;
      text-transform: uppercase;
      color: ${theme.colors.white};
      font-weight: 400;
      text-align: center;
      text-decoration: none;
      line-height: 40px;
      cursor: pointer;
      font-size: ${theme.font.sizes.xsmall};
    }

    .button-shelf:hover {
      background: #ce2680;
    }
    @media ${theme.media.xsmall} {
      .shelf-card {
        scale: 0.93;
      }
    }
  `}
`;
