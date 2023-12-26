/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import BarChart from '../../components/charts/BarChart';
import useQueryHook from '../../hooks/useQuery.hooks';

const Expenses = () => {
  const [chartLabels, setChartLabels] = useState<any>([]);
  const [chartData, setChartData] = useState<any>();

  const { items, isLoading } = useQueryHook({ query: 'expenses/categories-expenses' });

  useEffect(() => {
    setChartLabels(items?.map((expense: any) => expense._id[0]));
    setChartData(items?.map((expense: any) => expense.totalAmount));
  }, [items]);

  return (
    <div className="home-wrapper">
      {isLoading ? (
        <h1> Loading ....</h1>
      ) : (
        <div className="expenses-wrapper">
          <BarChart
            dataSets={[
              {
                label: 'Amount Rs',
                data: chartData,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
              },
            ]}
            chartLabels={chartLabels}
          />
        </div>
      )}
    </div>
  );
};

export default Expenses;
