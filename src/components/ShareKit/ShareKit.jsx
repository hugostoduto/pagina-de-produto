import P from "prop-types";

import React from "react";
import { Heading } from "../Heading/Heading";
import * as Styled from "./styles";
import LogoDuloren from "./D45x45.png";
import { MdOutlineFileDownload } from "react-icons/md";
import { TextComponent } from "../TextComponent/TextComponent";

export const ShareKit = ({ banner }) => {
  function doenload2() {
    fetch(LogoDuloren).then((response) => {
      response.blob().then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = "employees.png";
        a.click();
      });
      //window.location.href = response.url;
    });
  }
  function doenload1() {
    fetch(LogoDuloren).then((response) => {
      response.blob().then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = "employees.png";
        a.click();
      });
      //window.location.href = response.url;
    });
  }

  const doenload = () => {
    doenload2();
    doenload1();
  };
  const links = [
    "https://www2.duloren.com.br/p/brenda/Banner-galeria.jpg",
    "https://www2.duloren.com.br/p/brenda/831314/831314_057-01.jpg",
  ];
  const varios = () => {
    for (let index = 0; index < links.length; index++) {
      let link = links;
      let a = document.createElement("a");
      a.href = link;
      a.click();
    }
  };
  return (
    <Styled.Container id="conteudo">
      <div className="shareKit-header">
        <img className="shareKit-d" src={LogoDuloren} alt="Logo Duloren" />{" "}
        <hr />
        <Heading
          color="gray"
          children="Conteúdos Sobre o Produto"
          as="h1"
          size="medium"
        />
      </div>
      <div className="sharekit-contaier">
        <div className="shareKit-banner">
          <img src={banner} alt={banner} className="shareKit-img" />
        </div>
        <div className="sharekit-textContainer">
          <div className="sharekit-text">
            <div className="shreKit-text-header">
              <TextComponent size="big">
                Baixe os conteúdos relacionados a esse produto
                <hr />
              </TextComponent>
            </div>
            <ul>
              <li>
                <TextComponent size="medium">
                  Imagens para redes sociais como <strong>Instagram</strong> e{" "}
                  <strong>Facebook</strong>
                </TextComponent>
              </li>
              <li>
                <TextComponent size="medium">
                  Página em <strong>PDF</strong> com as informações do produto
                </TextComponent>
              </li>
              <li>
                <TextComponent size="medium">Vídeo do produto</TextComponent>
              </li>
            </ul>
          </div>
          <p
            onClick={varios}
            download="textfile1.png"
            className="shareKit-button"
          >
            <MdOutlineFileDownload
              style={{ cursor: "pointer", marginRight: "10px" }}
              size={30}
            />
            Baixar
          </p>
        </div>
      </div>
    </Styled.Container>
  );
};

ShareKit.propTypes = {
  banner: P.string.isRequired,
};
export default ShareKit;
/*    const url =
    "https://www2.duloren.com.br/p/performance/814005/814005_077-01.jpg";

    const url = [LogoDuloren];
    const blob = new Blob(url, { type: "image/png" });
    const hrf = URL.createObjectURL(blob);
     const handleDownload = (e) => {
      for (let i = 0; i < .length; i++) {
        console.log();
      }
    }; */
