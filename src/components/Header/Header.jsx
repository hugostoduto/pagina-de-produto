import * as Styled from "./styles";
import React, { useRef, useState, useEffect } from "react";

import Menu from "../Menu/Menu";

export const Header = () => {
  const header = useRef(null);
  const [scroll, setScroll] = useState("noFixed");
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code

    window.addEventListener("scroll", onScroll);
    return setScroll(offset <= 0 ? "noFixed" : "fixed");
  }, [offset]);

  return (
    <Styled.Container isFixed={scroll} ref={header}>
      <div className="header-container">
        <div className="logo"></div>
        <div className="menu">
          <Menu />
        </div>
      </div>
    </Styled.Container>
  );
};

export default Header;
