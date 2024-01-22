"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Title, Legend, Colors } from "chart.js";
Chart.register(ArcElement, Tooltip, Title, Legend, Colors);

const doughnutData = {
  labels: ["Javascript", "Typescript", "Python", "Go"],

  datasets: [
    {
      data: [50, 15, 25, 10],
      borderWidth: 0,
    },
  ],
};
const doughnutOptions = {
  plugins: {
    legend: {
      display: true,
      position: "bottom",
      labels: {
        // This more specific font property overrides the global property
        font: {
          size: 12,
        },
      },
    },
    title: {
      display: true,
      text: "Language I Love",
      font: {
        size: 16,
      },
    },
    colors: {
      forceOverride: true,
    },
  },
};

const DoughnutChart = () => {
  return (
    <div className="w-[50%]">
      <Doughnut
        data={doughnutData}
        options={doughnutOptions}
        width={200}
        height={200}
      />
    </div>
  );
};

export default DoughnutChart;
