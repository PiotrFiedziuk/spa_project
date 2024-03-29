import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { GlobalStyled, theme } from "./providers/Styles";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyled />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
