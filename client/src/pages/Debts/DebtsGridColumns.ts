const DebtsGridColumns = [
  { field: 'name', headerName: 'Title', width: 250 },
  {
    field: 'description',
    headerName: 'Description',
    width: 250,
    align: 'left',
    headerAlign: 'left',
  },
  {
    field: 'creditor',
    headerName: 'Creditor',
    width: 250,
  },
  {
    field: 'amount',
    headerName: 'Amount',
    width: 250,
  },
  {
    field: 'dateIncurred',
    headerName: 'Date Incurred',
    width: 250,
  },
  {
    field: 'interestRate',
    headerName: 'Interest Rate',
    width: 250,
  },
  {
    field: 'interestToBePaid',
    headerName: 'Interest To Be Paid',
    width: 250,
  },

  {
    field: 'status',
    headerName: 'Status',
    width: 250,
  },
  {
    field: 'priority',
    headerName: 'priority',
    width: 250,
  },
];

export default DebtsGridColumns;
