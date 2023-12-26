/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import ExpensesGridColumn from './ExpensesGridColumns';
import Grid from '../../components/Grid/Grid';
import useQueryHook from '../../hooks/useQuery.hooks';
import ExpenseForm from './ExpenseForm';

const ExpensesGridView = () => {
  const { items, isLoading, onActionHandler } = useQueryHook({ query: 'expenses' });

  return (
    <div>
      {isLoading && <h1>is Lading......</h1>}
      {items && (
        <>
          <div>
            <ExpenseForm onActionHandler={onActionHandler} />
          </div>
          <Grid
            columns={ExpensesGridColumn}
            gridData={items?.map((item: any) => ({
              ...item,
              id: Math.floor(Math.random() * 10), // corrected the random function
            }))}
          />
        </>
      )}
    </div>
  );
};

export default ExpensesGridView;
