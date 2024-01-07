const DebtsFormFields = [
  { name: 'name', required: true, label: 'Title', type: 'text' },
  { name: 'description', label: 'Description', type: 'text' },
  { name: 'creditor', required: true, label: 'Creditor', type: 'string' },
  { name: 'amount', required: true, label: 'Amount', type: 'number' },
  { name: 'dateIncurred', required: true, label: 'Date Incurred', type: 'date' },
  { name: 'interestRate', required: true, label: 'Interest Rate', type: 'number' },
  {
    name: 'insterestToBePaid',
    required: true,
    label: 'Interest To Be Paid Rate',
    type: 'number',
    disabled: true,
  },
  {
    name: 'status',
    label: 'Status',
    type: 'dropdown',
    dropdownList: ['Pending', 'Paid', 'Overdue'],
  },
  {
    name: 'priority',
    label: 'Priority',
    type: 'dropdown',
    dropdownList: ['High', 'Medium', 'Low'],
  },
];

export default DebtsFormFields;
