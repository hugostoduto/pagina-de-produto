import P from "prop-types";
import * as Styled from "./styles";

export const Menu = ({ link = "um link" }) => {
  const links = [
    { link: "#outros-modelos", nome: "Outros Modelos" },
    { link: "#conteudo", nome: "Conteudo do Produto" },
    { link: "#tabela-medidas", nome: "Tabela de Medidas" },
    { link: "https://www2.duloren.com.br/lookbook/", nome: "Look Book" },
  ];

  return (
    <Styled.Container>
      <div className="menu-container">
        {links.map((link) => (
          <div key={link.nome} className="menu-button">
            <a target="" href={link.link} rel="noreferrer">
              {link.nome}
            </a>
          </div>
        ))}
      </div>
    </Styled.Container>
  );
};

Menu.propTypes = {
  link: P.string.isRequired,
};
export default Menu;
