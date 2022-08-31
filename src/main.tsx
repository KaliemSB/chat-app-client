import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.scss"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <main>
      <div className="Header bg-ctp-base shadow-md z-10"></div>
      <div className="ChannelHeader bg-ctp-mantle shadow-md z-10"></div>
      <div className="Sidebar bg-ctp-base"></div>
      <div className="User bg-ctp-base border-t border-ctp-mantle"></div>
      <div className="Chat bg-ctp-mantle"></div>
    </main>
  </React.StrictMode>
);
