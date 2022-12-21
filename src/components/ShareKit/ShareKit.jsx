import P from "prop-types";

import React from "react";
import { Heading } from "../Heading/Heading";
import * as Styled from "./styles";
import LogoDuloren from "./D45x45.png";
import { MdOutlineFileDownload } from "react-icons/md";

import { TextComponent } from "../TextComponent/TextComponent";

export const ShareKit = ({ banner }) => {
  function download1() {
    fetch(LogoDuloren).then((response) => {
      response.blob().then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = "feed.jpg";
        a.click();
      });
      //window.location.href = response.url;
    });
  }
  function download2() {
    fetch("https://www2.duloren.com.br/p/brenda/831314/831314_057-01.jpg").then(
      (response) => {
        response.blob().then((blob) => {
          let url = window.URL.createObjectURL(blob);
          let a = document.createElement("a");
          a.href = url;
          a.download = "story.jpg";
          a.click();
        });
        //window.location.href = response.url;
      }
    );
  }
  function download3() {
    fetch("https://www2.duloren.com.br/p/brenda/831314/831314.mp4").then(
      (response) => {
        response.blob().then((blob) => {
          let url = window.URL.createObjectURL(blob);
          let a = document.createElement("a");
          a.href = url;
          a.download = "video.mp4";
          a.click();
        });
        //window.location.href = response.url;
      }
    );
  }

  const download = () => {
    download1();
    download2();
    download3();
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
          <p onClick={download} className="shareKit-button">
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
