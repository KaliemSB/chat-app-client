import React from "react";
import ReactDOM from "react-dom/client";
import { Channels } from "./components/blocks/Channels";
import { Header } from "./components/blocks/Header";
import { User } from "./components/blocks/User";
import "./styles/global.scss"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <main>
      <div className="Header bg-base shadow-md z-10 flex items-center px-4">
        <Header />
      </div>
      <div className="ChannelHeader bg-mantle shadow-md z-10"></div>
      <div className="Sidebar bg-base p-4 overflow-y-auto">
        <Channels />
      </div>
      <div className="User bg-base border-t border-mantle px-4 flex items-center">
        <User />
      </div>
      <div className="Chat bg-mantle"></div>
    </main>
  </React.StrictMode>
);
