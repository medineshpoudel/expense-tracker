import React from 'react';
import { BarChart as BarChartComponent } from '@mui/x-charts/BarChart';

export interface BarChartProps {
  chartXAxis: any;
  chartData: number[];
  width?: number;
  height?: number;
}

const BarChart = ({
  chartXAxis = {
    id: 'barCategories',
    data: ['bar A', 'bar B', 'bar C'],
    scaleType: 'band',
  },
  chartData = [2, 5, 3],
  width = 500,
  height = 300,
}: BarChartProps) => (
  <BarChartComponent
    xAxis={[chartXAxis]}
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
