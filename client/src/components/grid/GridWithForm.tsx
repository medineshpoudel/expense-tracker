import React, { useContext } from 'react';
import Grid from './Grid';
import ActionHandlerActions from '../../constants/StaticLists';
import { ModalContext } from '../../context/ModalProvider';
import FormComponent from '../forms/Form';

const GridWithForm = ({ gridData, gridColumns, formFields, onActionHandler, formTitle }: any) => {
  const { setModalState, closeModal } = useContext(ModalContext);

  const onFormSubmit = (data: any) => {
    onActionHandler({ action: ActionHandlerActions.Add, item: data });
    closeModal();
  };

  const onFormEdit = (data: any) => {
    onActionHandler({ action: ActionHandlerActions.Update, item: data });
    closeModal();
  };

  const onAddHandler = () => {
    setModalState({
      title: `Create ${formTitle}`,
      dialogChildren: (
        <FormComponent
          formFields={formFields}
          formTitle="Records"
          onCancel={() => {
            closeModal();
          }}
          onSubmit={onFormSubmit}
        />
      ),
    });
  };
  const onEditHandler = (data: any) => {
    setModalState({
      title: `Create ${formTitle}`,
      dialogChildren: (
        <FormComponent
          initialValues={data}
          formFields={formFields}
          formTitle="Records"
          onCancel={() => {
            closeModal();
          }}
          onSubmit={onFormEdit}
        />
      ),
    });
  };

  const onDeleteHandler = (data: any) => {
    onActionHandler({ action: ActionHandlerActions.Delete, item: data });
  };

  return (
    <Grid
      gridData={gridData}
      gridColumns={gridColumns}
      onAdd={onAddHandler}
      onEdit={onEditHandler}
      onDelete={onDeleteHandler}
    />
  );
};

export default GridWithForm;
