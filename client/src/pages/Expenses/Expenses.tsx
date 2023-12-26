/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import BarChart from '../../components/charts/BarChart';
import useQueryHook from '../../hooks/useQuery.hooks';
import ActionHandlerActions from '../../constants/StaticLists';

const Expenses = () => {
  const [chartLabels, setChartLabels] = useState<any>([]);
  const [chartData, setChartData] = useState<any>();
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>();
  const [amount, setAmount] = useState<number>();
  const [category, setCategory] = useState<any>();
  const { items, isLoading } = useQueryHook({ query: 'expenses/categories-expenses' });
  const { onActionHandler } = useQueryHook({ query: 'expenses' });

  useEffect(() => {
    setChartLabels(items?.map((expense: any) => expense._id[0]));
    setChartData(items?.map((expense: any) => expense.totalAmount));
  }, [items]);

  const onExpenseSubmit = (e: any) => {
    e.preventDefault();
    const data = { title, description, amount, category };
    onActionHandler({
      action: ActionHandlerActions.Add,
      item: data,
    });
  };

  return (
    <div className="home-wrapper">
      {isLoading ? (
        <h1> Loading ....</h1>
      ) : (
        <div className="expenses-wrapper">
          <h1>Total Expenses based on categories</h1>
          <div style={{ height: '70%', width: '70%' }}>
            <form onSubmit={onExpenseSubmit}>
              <h1 className="login-form-header">Add Expese</h1>
              <label htmlFor="title"> Title </label>
              <input
                type="text"
                // placeholder="youremail@email.com"
                name="title"
                id="title"
                onChange={(e: any) => setTitle(e.target.value)}
              />
              <label htmlFor="description"> Description </label>
              <input
                type="text"
                name="description"
                id="description"
                onChange={(e: any) => setDescription(e.target.value)}
              />
              <label htmlFor="amount"> Amount </label>
              <input
                type="number"
                name="amount"
                id="amount"
                onChange={(e: any) => setAmount(e.target.value)}
              />
              <label htmlFor="amount"> Category </label>
              <select
                name="category"
                id="category"
                onChange={(e: any) => setCategory(e.target.value)}
              >
                <option value="personal">Personal</option>
                <option value="bill sharing">Bill Sharing</option>
                <option value="family expenditure">Family Expenditure</option>
                <option value="loan payment">Loan Payment</option>
              </select>
              <br />
              <button type="submit">Submit</button>
            </form>
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
