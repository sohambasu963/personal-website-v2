"use client";
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

function calculateInvestmentGrowth(
  startAge,
  initialInvestment,
  monthlyContribution,
  annualReturnRate,
  endAge = 65,
) {
  const years = endAge - startAge;
  const totalYears = endAge - 20;
  const monthlyReturnRate = annualReturnRate / 12;
  const months = years * 12;
  const futureValues = Array(totalYears * 12).fill(0);

  let futureValue = initialInvestment;
  for (let i = 0; i < months; i++) {
    futureValue = futureValue * (1 + monthlyReturnRate) + monthlyContribution;
    futureValues[(startAge - 20) * 12 + i] = parseFloat(futureValue.toFixed(2));
  }

  return futureValues;
}

export default function InvestmentChart({
  monthlyContribution,
  annualReturnRate,
}) {
  const initialInvestment = 0;
  const endAge = 65;
  const labels = Array.from({ length: endAge - 20 + 1 }, (_, i) => 20 + i);

  const fvAge20 = calculateInvestmentGrowth(
    20,
    initialInvestment,
    monthlyContribution,
    annualReturnRate,
  );
  const fvAge25 = calculateInvestmentGrowth(
    25,
    initialInvestment,
    monthlyContribution,
    annualReturnRate,
  );
  const fvAge30 = calculateInvestmentGrowth(
    30,
    initialInvestment,
    monthlyContribution,
    annualReturnRate,
  );
  const fvAge40 = calculateInvestmentGrowth(
    40,
    initialInvestment,
    monthlyContribution,
    annualReturnRate,
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Start at Age 20",
        data: fvAge20.filter((_, i) => i % 12 === 0),
        borderColor: "rgba(75, 192, 192, 1)",
        fill: false,
      },
      {
        label: "Start at Age 25",
        data: fvAge25.filter((_, i) => i % 12 === 0),
        borderColor: "rgba(153, 102, 255, 1)",
        fill: false,
      },
      {
        label: "Start at Age 30",
        data: fvAge30.filter((_, i) => i % 12 === 0),
        borderColor: "rgba(255, 159, 64, 1)",
        fill: false,
      },
      {
        label: "Start at Age 40",
        data: fvAge40.filter((_, i) => i % 12 === 0),
        borderColor: "rgba(255, 99, 132, 1)",
        fill: false,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Age",
        },
      },
      y: {
        title: {
          display: true,
          text: "Investment Value ($)",
        },
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
}
