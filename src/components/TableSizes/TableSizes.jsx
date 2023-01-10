import P from "prop-types";
import * as Styled from "./styles";
import React from "react";
import LogoDuloren from "./D45x45.png";
import { Heading } from "../Heading/Heading";

export const TableSizes = ({ children }) => {
  return (
    <Styled.Container>
      <div id="tabela-medidas" className="table-header">
        <img className="table-d" src={LogoDuloren} alt="Logo Duloren" /> <hr />
        <Heading
          color="gray"
          children="Tabela de Medidas"
          as="h1"
          size="medium"
        />
      </div>
      <div className="table-size-container">
        {/*  <div className="table-banner">
          <img src={banner} alt={banner} className="table-img" />
        </div> */}
        <table class="content-table">
          <thead>
            <tr>
              <th>Tamanhos</th>
              <th>P</th>
              <th>M</th>
              <th>G</th>
              <th>EG</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Busto</td>
              <td>80cm - 84cm</td>
              <td>92cm - 99cm</td>
              <td>98cm - 102cm</td>
              <td>105cm - 109cm</td>
            </tr>
            <tr class="active-row">
              <td>Sub Busto</td>
              <td>70cm - 74cm</td>
              <td>76cm - 80cm</td>
              <td>80cm - 87cm</td>
              <td>91cm - 95cm</td>
            </tr>
            <tr>
              <td>Cintura</td>
              <td>69cm - 73cm</td>
              <td>76cm - 80cm</td>
              <td>80cm - 87cm</td>
              <td>90cm - 94cm</td>
            </tr>
            <tr class="active-row">
              <td>Quadril</td>
              <td>98cm - 102cm</td>
              <td>106cm - 110cm</td>
              <td>113cm - 117cm</td>
              <td>120cm - 124cm</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Styled.Container>
  );
};

TableSizes.propTypes = {
  children: P.node.isRequired,
};
export default TableSizes;
