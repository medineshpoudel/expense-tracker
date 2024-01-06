import React from 'react';
import { BarChart as BarChartComponent } from '@mui/x-charts/BarChart';

export interface BarChartProps {
  chartLabel: String[];
  chartData: number[];
  width?: number;
  height?: number;
}

const BarChart = ({
  chartLabel = ['a', 'b', 'c'],
  chartData = [2, 5, 3],
  width = 500,
  height = 300,
}: BarChartProps) => (
  <BarChartComponent
    xAxis={[
      {
        id: 'barCategories',
        data: chartLabel,
        scaleType: 'band',
      },
    ]}
    series={[
      {
        data: chartData,
      },
    ]}
    width={width}
    height={height}
  />
);

export default BarChart;
