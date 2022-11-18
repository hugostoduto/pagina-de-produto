import P from "prop-types";
import * as Styled from "./styles";
import React, { useState } from "react";
import { CgMenuLeftAlt } from "react-icons/cg";

import { AiOutlineClose } from "react-icons/ai";
export const MenuMobile = ({ links }) => {
  const link = [
    { link: "#outros-modelos", nome: "Modelos da Coleção" },
    { link: "#conteudo", nome: "Conteudo do Produto" },
    { link: "#tabela-medidas", nome: "Tabela de Medidas" },
    { link: "https://www2.duloren.com.br/lookbook/", nome: "Outas Coleções" },
  ];
  const [open, setOpen] = useState("close");
  const handleMenu = () => setOpen(open === "close" ? "open" : "close");
  return (
    <Styled.MenuMobile isOpen={open}>
      <div className="open-button-container">
        <div onClick={handleMenu} className="open-button">
          <CgMenuLeftAlt size={25} cursor="pointer" />
          <p>menu</p>
        </div>
      </div>
      <div className="menu-mobile">
        <AiOutlineClose
          onClick={handleMenu}
          className="close-button"
          size={40}
          cursor="pointer"
        />
        {link.map((link) => (
          <div key={link.nome} className="menu-mobile-button">
            <a target="" href={link.link} rel="noreferrer">
              {link.nome}
            </a>
          </div>
        ))}
      </div>
    </Styled.MenuMobile>
  );
};

MenuMobile.propTypes = {
  links: P.string.isRequired,
};
export default MenuMobile;
