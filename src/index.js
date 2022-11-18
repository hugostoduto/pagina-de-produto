import React from "react";
import ReactDOM from "react-dom/client";
import App from "./templates/App/App";
import { GlobalStyles } from "./styles/global-styles";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import Header from "./components/Header/Header";
import MenuMobile from "./components/MenuMobile/MenuMobile";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <div className="header">
        <Header />
      </div>

      <div className="page">
        <App />
      </div>

      <div className="mobile">
        <MenuMobile />
      </div>

      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>
);
