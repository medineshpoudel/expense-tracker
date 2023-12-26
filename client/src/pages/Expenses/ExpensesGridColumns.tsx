import { GridColDef } from '@mui/x-data-grid';

const ExpensesGridColumn: GridColDef[] = [
  {
    field: 'title',
    headerName: 'Title',
    width: 150,
    editable: true,
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 150,
    editable: true,
  },
  {
    field: 'amount',
    headerName: 'Amount',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'category',
    headerName: 'Category',
    sortable: false,
    width: 160,
  },

  {
    field: 'createdAt',
    headerName: 'Created At',
    sortable: false,
    width: 160,
  },
  {
    field: 'udatedAt',
    headerName: 'Updated At',
    sortable: false,
    width: 160,
  },
];

export default ExpensesGridColumn;
