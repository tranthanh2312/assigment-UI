import React from "react";
import NavBar from "../components/NavBar";
import Pie from "../components/Pie";
import { TableDemo } from "../components/table";
import ChartExample from "../components/ChartExample";
import useScreenSize from "../hooks/useScreenSize";

const Dashboard = () => {
  const screenSize = useScreenSize();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#D3D3D3",
        // height: "100%",
        // width: screenSize.width,
      }}
    >
      <NavBar />

      <div
        style={{
          display: "flex",
          flexDirection: screenSize.width < 992 ? "column" : "row",
          justifyContent: "space-around",
          alignItems: screenSize.width < 992 ? "center" : "start",
          width: "100%",
          marginTop: screenSize.width < 992 ? "10vh" : "5vh" ,
          marginBottom: screenSize.width < 992 ? "10vh" : "5vh" ,
          paddingLeft: screenSize.width < 992 ? "2vh" : "8vw",
          paddingRight: screenSize.width < 992 ? "2vh" : "8vw",
          gap: screenSize.width < 992 ? "10vh" : "5vh",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            gap: "2vh",
            // height: "80vh",
            // width: "100%",
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
            height: "auto",
            width: "100%",
          }}
        >
          <ChartExample />
          {/* {JSON.stringify(screenSize)} */}
          <TableDemo />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
