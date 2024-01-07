/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import useQueryHook from '../../hooks/useQuery.hooks';
import GridWithForm from '../../components/grid/GridWithForm';
import DebtsFormFields from './DebtsFormField';
import DebtsGridColumns from './DebtsGridColumns';
import LoadingPage from '../LoadingPage';

const Debts = () => {
  const { items, isLoading, onActionHandler } = useQueryHook({ query: 'debts' });

  return (
    <div>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div className="expenses-wrapper">
          <GridWithForm
            gridData={items}
            formFields={DebtsFormFields}
            gridColumns={DebtsGridColumns}
            onActionHandler={onActionHandler}
            pageTitle="Debts"
          />
        </div>
      )}
    </div>
  );
};

export default Debts;
