import React from "react";
import ReactDOM from "react-dom/client";
import { VisibilityProvider } from "./providers/VisibilityProvider";
import App from "./components/App";
import GlobalStyle from "./styles/GlobalStyle";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <VisibilityProvider>
      <App />
      <GlobalStyle />
    </VisibilityProvider>
  </React.StrictMode>
);
