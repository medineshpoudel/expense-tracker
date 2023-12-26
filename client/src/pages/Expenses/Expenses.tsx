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
          <h1>Total Expenses based on categories</h1>
          <div style={{ height: '70%', width: '70%' }}>
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
        </div>
      )}
    </div>
  );
};

export default Expenses;
