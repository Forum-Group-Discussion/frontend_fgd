import React, { useState } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";
const { faker } = require("@faker-js/faker");

const labels = ["Monday", "Tuesday", "Wednesday", "Thusday", "Friday", "Saturday", "Sunday"];
const data1 = [0, 10, 5, 2, 20, 30, 45];
const data2 = [15, 50, 15, 35, 18, 10, 5];

// const data = {[

// ]}

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function ThreadStatistic() {
  const [dataset, setData] = useState({ label: labels, data1: data1, data2: data2 });

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  const data = {
    labels: dataset.label,
    datasets: [
      {
        label: "Dataset 1",
        data: dataset.data1,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: dataset.data2,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div className="rounded-md border-gray-500/10 border-2 p-3">
      <p className="text-xl font-bold">Thread Statistic</p>
      <Line options={options} data={data} />
    </div>
  );
}
