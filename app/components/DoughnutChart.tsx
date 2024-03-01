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
    responsive: true,
    legend: {
      display: true,
      position: "bottom" as const,
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
    <Doughnut
      data={doughnutData}
      options={doughnutOptions}
      width={300}
      height={200}
    />
  );
};

export default DoughnutChart;
