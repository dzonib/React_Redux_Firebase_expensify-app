import {
  removeExpense,
  editExpense,
  addExpense
} from '../../redux/actions/expense';

test('testing removeExpense action', () => {
  const action = removeExpense({ id: 'ak47' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: 'ak47'
  });
});

test('testing editExpense action', () => {
  const action = editExpense('225-883', {
    description: 'blabla',
    amount: '21',
    note: 'aloha'
  });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '225-883',
    updates: {
      description: 'blabla',
      amount: '21',
      note: 'aloha'
    }
  });
});

test('testing addExpense action (default values, not entering any args)', () => {
  expect(addExpense({})).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      amount: 0,
      createdAt: 0,
      note: ''
    }
  });
});

test('testing add expense with provided values', () => {
  const expenseData = {
    description: 'test',
    amount: 123,
    createdAt: 321,
    note: 'dodo'
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});
