import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import Pie from "./Pie";
import Navbar from "./Navbar";
import Demo from "./Component";
import { TableDemo } from "./table.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#D3D3D3",
        height: "100vh",
      }}
    >
      <Demo />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "start",
          width: "100%",
          marginTop: "5vh",
          paddingLeft: "8vw",
          paddingRight: "8vw",
          gap: "2vw",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            gap: "2vh",
            height: "80vh"
          }}
        >
          <Pie />
          <Pie />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            gap: "2vh",
            height: "80vh"
          }}
        >
          <App />
          <TableDemo />
        </div>
      </div>
    </div>

    {/* <Navbar /> */}

    {/* <div className="grid grid-cols-2   gap-8 p-8 "> */}
  </React.StrictMode>
);
