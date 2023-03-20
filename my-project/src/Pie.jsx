import React from "react";
import { VictoryPie } from "victory-pie";

const myData = [
  { x: "Toán", y: 900 },
  { x: "Lý", y: 400 },
  { x: "Hóa", y: 300 },
  { x: "Tiếng Anh", y: 300 },
];

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#fff",
        border: "4px #000",
        borderRadius: "25px",
      }}
    >
      {/* <div className="items-center justify-center bg-white rounded-3xl"> */}
      <div>
        <h2 className="content-center flex justify-center">
          DOANH THU TỪNG MÔN THÁNG 1
        </h2>
        <VictoryPie
          data={myData}
          className=""
          colorScale={["blue", "yellow", "red", "orange"]}
          radius={100}
        />

        {/* <div className="grid grid-cols-2   justify-center ">
          <div className="flex items-center justify-center gap-8 pb-8">
            <div className="bg-blue-600 w-20 h-10"></div>
            <div>Toán</div>
          </div>
          <div className="flex items-center justify-center gap-8 pb-8">
            <div className="bg-yellow-300 w-20 h-10"></div>
            <div>Lý</div>
          </div>
          <div className="flex items-center justify-center gap-8 pb-8">
            <div className="bg-red-600 w-20 h-10"></div>
            <div>Hóa</div>
          </div>
          <div className="flex items-center justify-center gap-8 pb-8 pl-14">
            <div className="bg-orange-400 w-20 h-10"></div>
            <div>Tiếng Anh</div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default App;
