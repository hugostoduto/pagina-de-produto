import P from "prop-types";
import * as Styled from "./styles";

export const Menu = ({ link = "um link" }) => {
  const links = [
    { link: "#outros-modelos", name: "Outros Modelos" },
    { link: "#tabela-medidas", name: "Tabela de Medidas" },
    { link: "https://www2.duloren.com.br/lookbook/", name: "Look Book" },
    { link: "#conteudo", name: "Compartilhe" },
  ];

  return (
    <Styled.Container>
      <div className="menu-container">
        {links.map((link) => (
          <div key={link.name} className="menu-button">
            <a target="" href={link.link} rel="noreferrer">
              {link.name}
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
