/* eslint-disable import/order */
import React, { useState } from 'react';
import FormComponent from '../../components/forms/Form';
import RecordsFormFields from './RecordsFormFields';
import { Button } from '@mui/material';
import Modal from '@mui/material/Modal';

const Records = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="form-modal"
      >
        <FormComponent
          formFields={RecordsFormFields}
          formTitle="Records"
          onCancel={() => {
            setOpen(false);
          }}
        />
      </Modal>
    </>
  );
};

export default Records;
