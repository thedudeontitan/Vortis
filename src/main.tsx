import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

import WebApp from "@twa-dev/sdk";

WebApp.ready();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TonConnectUIProvider
      manifestUrl="https://vortis.vercel.app/tonconnect-manifest.json"
      actionsConfiguration={{
        returnStrategy: "back",
      }}
    >
      <App />
    </TonConnectUIProvider>
  </React.StrictMode>
);
