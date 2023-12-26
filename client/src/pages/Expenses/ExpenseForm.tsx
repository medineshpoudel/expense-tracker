/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import ActionHandlerActions from '../../constants/StaticLists';

const ExpenseForm = ({ onActionHandler }: any) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>();
  const [amount, setAmount] = useState<number>();
  const [category, setCategory] = useState<any>();

  const onExpenseSubmit = (e: any) => {
    e.preventDefault();
    const data = { title, description, amount, category };
    onActionHandler({
      action: ActionHandlerActions.Add,
      item: data,
    });
  };

  return (
    <div>
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
        <select name="category" id="category" onChange={(e: any) => setCategory(e.target.value)}>
          <option value="personal">Personal</option>
          <option value="bill sharing">Bill Sharing</option>
          <option value="family expenditure">Family Expenditure</option>
          <option value="loan payment">Loan Payment</option>
        </select>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
