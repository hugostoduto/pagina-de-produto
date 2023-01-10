import P from "prop-types";

import React from "react";
import { Heading } from "../Heading/Heading";
import * as Styled from "./styles";
import LogoDuloren from "./D45x45.png";
import story from "./content/story.jpg";
import feed from "./content/feed.jpg";
import video from "./content/video.mp4";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

export const ShareKit = ({ banner }) => {
  const handleDownload = () => {
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
    fetch(video).then((response) => {
      response.blob().then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = "video.mp4";
        a.click();
      });
      //window.location.href = response.url;
    });
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
            <p onClick={handleDownload} className="shareKit-button">
              <MdOutlineFileDownload
                style={{ cursor: "pointer", marginRight: "10px" }}
                size={30}
              />
              Baixar
            </p>
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
