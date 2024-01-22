"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Colors,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Colors
);
const options = {
  indexAxis: "y",
  responsive: true,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Dev Skills I can do",
      font: {
        size: 16,
      },
    },
  },
  scales: {
    // to remove the labels
    x: {
      ticks: {
        display: false,
      },
    },
  },
};
const data = {
  labels: ["FrontEnd", "BackEnd", "Database", "Machine Learning"],

  datasets: [
    {
      data: [40, 30, 20, 10],
      borderWidth: 0,
    },
  ],
};

const HorizontalLineChart = () => {
  return (
    <div className="w-[300px] h-[300px]">
      <Bar options={options} data={data} width={200} height={200} />
    </div>
  );
};

export default HorizontalLineChart;
