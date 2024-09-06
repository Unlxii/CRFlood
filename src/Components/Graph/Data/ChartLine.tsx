import React from "react";
import { TEChart, TEChartData } from "tw-elements-react";

interface ChartDataset {
  label: string;
  data: number[];
}

const chartData: TEChartData = {
  labels: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  datasets: [
    {
      label: "Traffic",
      data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
    },
  ],
};

const ChartLine: React.FC = (): JSX.Element => {
  return <TEChart type="line" data={chartData} />;
};

export default ChartLine;
