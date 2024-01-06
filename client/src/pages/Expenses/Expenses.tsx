/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import useQueryHook from '../../hooks/useQuery.hooks';
import BarChart from '../../components/charts/BarChart';

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
            chartData={chartData}
            chartXAxis={{
              id: 'barCategories',
              data: chartLabels ?? ['Expense', 'Expense 2', 'Expense 3'],
              scaleType: 'band',
            }}
            width={900}
          />
        </div>
      )}
    </div>
  );
};

export default Expenses;
