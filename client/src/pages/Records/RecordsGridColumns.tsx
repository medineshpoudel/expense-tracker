import { GridColDef } from '@mui/x-data-grid';

const RecordGrirdColumns: GridColDef[] = [
  { field: 'title', headerName: 'Title', width: 180, editable: true },
  {
    field: 'description',
    headerName: 'Description',
    width: 80,
    align: 'left',
    headerAlign: 'left',
    editable: true,
  },
  {
    field: 'amount ',
    headerName: 'Amount',
    type: 'number',
    width: 180,
    editable: true,
  },
  {
    field: 'category',
    headerName: 'Category',
    width: 220,
    editable: true,
    // type: 'singleSelect',
    // valueOptions: ['Market', 'Finance', 'Development'],
  },
];

export default RecordGrirdColumns;
