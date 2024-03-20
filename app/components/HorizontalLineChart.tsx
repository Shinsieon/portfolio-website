"use client";
import React, { useState } from "react";
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
import { InformationCircleIcon } from "@heroicons/react/24/outline";
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
  maintainAspectRatio: false,
  indexAxis: "y" as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  plugins: {
    responsive: false,
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
    // y: {
    //   ticks: {
    //     display: false,
    //   },
    // },
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
    <div className="w-1/2">
      <Bar options={options} data={data} />
    </div>
  );
};

export default HorizontalLineChart;
