/* eslint-disable import/order */
import React, { useEffect, useState } from 'react';
import useQueryHook from '../../hooks/useQuery.hooks';
import BarChart from '../../components/charts/BarChart';

const Records = () => {
  const [chartLabels, setChartLabels] = useState<any>([]);
  const [chartData, setChartData] = useState<any>([]);

  const { items, isLoading } = useQueryHook({ query: 'expenses/category' });

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
          <BarChart chartLabel={chartLabels ?? ['a', 'b', 'c']} chartData={chartData} />
        </div>
      )}
    </div>
  );
};

export default Records;
