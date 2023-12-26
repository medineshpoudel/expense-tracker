import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({
  dataSets = [
    {
      label: 'Monthly',
      data: [10, 20, 30, 40, 50, 60, 70, 80],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
  chartLabels = ['Personal', 'Bill Sharing', 'Loan Payment', 'Family Expenditure'],
  chartTitle = 'Expenses',
  horizontal = false,
  redrawChart = false,
}: any) => {
  const barChartOptions = {
    responsive: true,
    indexAxis: `${horizontal ? 'y' : 'x'}` as const,
    plugins: {
      legend: {
        position: `${horizontal ? 'right' : 'top'}` as const,
      },
      title: {
        display: true,
        text: chartTitle,
      },
    },
  };

  const chartData = {
    labels: chartLabels,
    datasets: dataSets,
  };

  return <Bar options={barChartOptions} data={chartData} redraw={redrawChart} />;
};

export default BarChart;
