import { useCss } from "@mantine/core";
import React, { Component } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import useScreenSize from "../hooks/useScreenSize";

const data = [
  { name: "tháng 1", uv: 4000, pv: 2400, amt: 2400 },
  { name: "tháng 2", uv: 3000, pv: 1398, amt: 2210 },
  { name: "tháng 3", uv: 2000, pv: 9800, amt: 2290 },
  { name: "tháng 4", uv: 2780, pv: 3908, amt: 2000 },
  { name: "tháng 5", uv: 1890, pv: 4800, amt: 2181 },
  { name: "tháng 6", uv: 2390, pv: 3800, amt: 2500 },
  { name: "tháng 7", uv: 3490, pv: 4300, amt: 2100 },
  { name: "tháng 8", uv: 3490, pv: 4300, amt: 2100 },
  { name: "tháng 9", uv: 3490, pv: 4300, amt: 2100 },
  { name: "tháng 10", uv: 3490, pv: 4300, amt: 2100 },
  { name: "tháng 11", uv: 3490, pv: 4300, amt: 2100 },
  { name: "tháng 12", uv: 3490, pv: 4300, amt: 2100 },
];

const ChartExample = () => {
  const screenSize = useScreenSize();

  return (
    <div
      style={{
        height: "400px",
        width: "100%",
        backgroundColor: "white",
        paddingTop: "5vh",
        paddingRight: "2vw",
        paddingLeft: "2vw",
        border: "1px solid #fff",
        borderRadius: "15px",
        overflowX: "auto",
      }}
    >
      <ResponsiveContainer
        className=" chart "
        height={screenSize.width < 992 ? 200 : screen.width * 0.5}
        width={screenSize.width < 992 ? 500 : screen.width * 0.5}
      >
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
      <div className=" flex items-center justify-center gap-10">
        <div className="bg-indigo-400 w-96 h-1"></div>
        <div>Doanh thu ước tính</div>
      </div>
      <div className=" flex items-center justify-center gap-10">
        <div className="bg-green-500 w-96 h-1"></div>
        <div>Doanh thu hiện tại</div>
      </div>
    </div>
  );
};

export default ChartExample;
