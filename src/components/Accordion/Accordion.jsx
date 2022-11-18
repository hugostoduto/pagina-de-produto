import P from "prop-types";
import * as Styled from "./styles";
import React, { useState } from "react";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
import { TextComponent } from "../TextComponent/TextComponent";
import { Heading } from "../Heading/Heading";

export const Accordion = ({
  title = "Título",
  text = "Texto de descrição",
}) => {
  const [open, setOpen] = useState("close");
  const handleOpen = () => setOpen(open === "close" ? "open" : "close");
  return (
    <Styled.Container isOpen={open}>
      <div className="accordion-container">
        <div onClick={handleOpen} className="accordion-title">
          <Heading size="small">{title}</Heading>
          <div className="open-accordion">
            <BiDownArrow onClick={handleOpen} />
          </div>
          <div className="close-accordion">
            <BiUpArrow onClick={handleOpen} />
          </div>
        </div>
        <div className="accordion-text">
          <TextComponent size="medium">{text}</TextComponent>
        </div>
      </div>
    </Styled.Container>
  );
};

Accordion.propTypes = {
  children: P.node.isRequired,
};
export default Accordion;
