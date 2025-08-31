import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { App } from "./components/App/App.tsx";
import { UserProvider } from "./context/UserProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
);
