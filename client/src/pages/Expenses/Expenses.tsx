/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import useQueryHook from '../../hooks/useQuery.hooks';
import BarChart from '../../components/charts/BarChart';
import Grid from '../../components/grid/Grid';
import RecordGrirdColumns from '../Records/RecordsGridColumns';
import GridWithForm from '../../components/grid/GridWithForm';
import ExpensesFormFields from './ExpensesFormFields';
import ExpensesGridColumn from './ExpensesGridColumns';
import LoadingPage from '../LoadingPage';

const Expenses = () => {
  const [chartLabels, setChartLabels] = useState<any>([]);
  const [chartData, setChartData] = useState<any>();

  const { items, isLoading, onActionHandler } = useQueryHook({ query: 'expenses' });
  useEffect(() => {
    setChartLabels(items?.map((expense: any) => expense._id[0]));
    setChartData(items?.map((expense: any) => expense.totalAmount));
  }, [items]);

  return (
    <div>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div className="expenses-wrapper">
          <GridWithForm
            gridData={items}
            formFields={ExpensesFormFields}
            gridColumns={ExpensesGridColumn}
            onActionHandler={onActionHandler}
            pageTitle="Expenses"
          />
        </div>
      )}
    </div>
  );
};

export default Expenses;
