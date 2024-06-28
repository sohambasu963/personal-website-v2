import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default function PerformanceChart({ data, labels }: any) {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Speculator",
        data: data.speculator,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: false,
      },
      {
        label: "ETF Investor",
        data: data.etfInvestor,
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "Year",
        },
      },
      y: {
        title: {
          display: true,
          text: "Portfolio Value ($)",
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
}
