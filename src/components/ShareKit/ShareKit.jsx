import P from "prop-types";

import React from "react";
import { Heading } from "../Heading/Heading";
import * as Styled from "./styles";
import LogoDuloren from "./D45x45.png";
import story from "./story.jpg";
import feed from "./feed.jpg";
import reel from "./video.mp4";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
/* import multiDownload from "multi-download"; */

export const ShareKit = ({ banner }) => {
  const download = () => {
    const files = [
      { url: story, name: "status_story.jpg" },
      { url: reel, name: "video.mp4" },
      { url: feed, name: "mensagem_feed.jpg" },
    ];
    /* multiDownload(files); */
    for (let index = 0; index < files.length; index++) {
      let a = document.createElement("a");
      a.href = files.map((i) => i.url)[index];
      a.download = files.map((n) => n.name)[index];
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
          size="big"
        />
      </div>
      <div className="sharekit-contaier">
        <div className="shareKit-banner">
          <img src={banner} alt={banner} className="shareKit-img" />
        </div>
        <div className="sharekit-textContainer">
          <div className="sharekit-downloadContainer">
            <Heading
              color="gray"
              size="medium"
              as="h1"
              children="Representantes e lojistas, baixe os contúdos sobre o produto e divulque nas redes sociais"
            />

            <hr />
            <div className="sharekit-textContainer-redes">
              <FaWhatsapp size={30} />
              <FaFacebook size={30} />
              <FaInstagram size={30} />
            </div>
            <button
              id="#download-button"
              onClick={download}
              className="shareKit-button"
            >
              <MdOutlineFileDownload
                style={{ cursor: "pointer", marginRight: "10px" }}
                size={30}
              />
              Baixar
            </button>
          </div>
        </div>
      </div>
    </Styled.Container>
  );
};

ShareKit.propTypes = {
  banner: P.string.isRequired,
};
export default ShareKit;

/* const handleDownload = () => {
  setTimeout(() => {
    fetch(story).then((response) => {
      response.blob().then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = "story/status.jpg";
        a.click();
      });
      //window.location.href = response.url;
    });
  }, 500);
  setTimeout(() => {
    fetch(feed).then((response) => {
      response.blob().then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = "feed.jpg";
        a.click();
      });
      //window.location.href = response.url;
    });
  }, 1000);
  setTimeout(() => {
    fetch(reel).then((response) => {
      response.blob().then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = "video.mp4";
        a.click();
      });
      //window.location.href = response.url;
    });
  }, 2000);
}; */
