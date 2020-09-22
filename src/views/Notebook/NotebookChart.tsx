import React from 'react';

import { Chart } from 'react-jsgraph';

interface NotebookChartProps {
  data: { x: number[]; y: number[] };
}

const NotebookChart = ({ data }: NotebookChartProps) => {
  const chart = {
    series: [
      {
        data,
        type: 'line',
        style: {
          line: { color: 'black', width: 3 },
          marker: { shape: 'rect', x: -4, y: -4 },
        },
      },
    ],
  };
  return <Chart chart={chart} style={{ width: 500 }} />;
};

export default NotebookChart;
