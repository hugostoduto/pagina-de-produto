import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 95%;
    border-radius:50px;
    flex-direction: column;
    align-items: center;
    padding: 30px 0px;
    background-color:${theme.seconderyBg};
}
    * {
      /* Change your font family */
      font-family: sans-serif;
    }
    .table-header {
      display: flex;
      align-items: center;
    }

    .table-d {
      width: 50px;
      height: 50px;
    }
    .table-header hr {
      height: 30px;
      margin: 0px 10px;
      border: 1px solid ${theme.colors.gray};
    }
    .table-banner {
      width: 400px;
      height: 400px;
      overflow: hidden;
      border-radius: 20px;
    }
    .table-img {
      width: 400px;
      height: 400px;
      object-fit: cover;
    }
    .table-size-container {
      display: flex;
      align-items:center;
      justify-content:center; 
      width: 60%;

    }
    .content-table {
      border-collapse: collapse;
      margin: 25px 0;
      font-size: 0.9em;
      min-width: 400px;
      background-color: ${theme.mainBg};
      border-radius: 5px 5px 0 0;
      overflow: hidden;
      border-radius: 15px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
      box-sizing: border-box;
    }

    .content-table thead tr {
      background-color: ${theme.colors.pink};
      color: #ffffff;
      text-align: center;
      font-weight: bold;
    }

    .content-table th,
    .content-table td {
      padding: 12px 15px;
      text-align: center;
      border: 1px solid white;
    }

    .content-table tbody tr {
      border-bottom: 1px solid #dddddd;
    }

    .content-table tbody tr:nth-of-type(even) {
      background-color: #f3f3f3;
    }

    .content-table tbody tr:last-of-type {
      border-bottom: 2px solid ${theme.colors.pink};
    }

    .content-table tbody tr.active-row {
      font-weight: bold;
      color: ${theme.colors.pink};
    }
    @media ${theme.media.small}{
      border-radius:20px;

      .table-size-container{
        scale: 0.9;
      }
    }
    @media ${theme.media.xsmall}{
      .table-size-container{
        scale: 0.7;
      }
      .table-header {
        flex-direction: column;

        text-align: center;
      }

      .table-d {
        width: 50px;
        height: 50px;
      }
      .table-header hr {
        height: 0px;
        margin: 10px 0px;
        width: 30px;
      }
    }
  `}
`;
