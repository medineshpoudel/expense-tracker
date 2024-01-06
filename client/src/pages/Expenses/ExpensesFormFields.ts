const ExpensesFormFields = [
  { name: 'title', required: true, label: 'Name', type: 'text' },
  { name: 'description', label: 'Description', type: 'text' },
  { name: 'amount', required: true, label: 'Amount', type: 'number' },
  {
    name: 'category',
    required: true,
    label: 'Amount',
    type: 'dropdown',
    dropdownList: ['personal', 'bill sharing', 'loan payment', 'family expenditure'],
  },
];

export default ExpensesFormFields;
