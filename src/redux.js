import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addExpense = ({ description = '', amount = 0, createdAt = 0 }) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    amount,
    createdAt
  }
});

const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

//filters

//text
const setTextFilter = text => ({
  type: 'SET_TEXT_FILTER',
  text
});

//sortBy date or amount
const sortBy = sort => ({
  type: 'SORT_BY',
  sort
});
//start date
const setStartDate = (date) => ({
  type: 'SET_START_DATE',
  date
})

const setEndDate = (date) => ({
  type: 'SET_END_DATE',
  date
})
//end date

const expenseReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, { ...action.expense }];
    case 'EDIT_EXPENSE':
      return state.map(exp => {
        if (exp.id === action.id) {
          return { ...exp, ...action.updates };
        } else {
          return exp;
        }
      });
    case 'REMOVE_EXPENSE':
      return state.filter(exp => exp.id !== action.id);

    default:
      return state;
  }
};

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return { ...state, text: action.text };
    case 'SORT_BY':
      return { ...state, sortBy: action.sort };
    case 'SET_START_DATE':
      return {...state, startDate: action.date};
    case 'SET_END_DATE':
      return {...state, endDate: action.date}    
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filtersReducer
  })
);


const visibleExpenseFilter = (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter( expense => {
    const startDateCheck = typeof startDate === 'undefined' || startDate <= expense.createdAt;
    const endDateCheck = typeof endDate === 'undefined'|| endDate >= expense.createdAt;
    const textCheck = expense.description.toLowerCase().includes(text.toLowerCase())

    return startDateCheck && endDateCheck && textCheck
  }).sort( (a, b) => {
    if (sortBy === 'date') {
      return a.createdAt > b.createdAt ? -1 : 1
    } else if (sortBy === 'amount') {
      return a.amount > b.amount ? 1 : -1
    }
  })
}


store.subscribe(() => {
  const state = store.getState()
  const visibleExpenses = visibleExpenseFilter(state.expenses, state.filters)
  console.log(visibleExpenses)
});

const item1 = store.dispatch(
  addExpense({ description: 'Water Bill', amount: 50, createdAt:  100})
);

const item2 = store.dispatch(addExpense({ description: 'Essen', amount: 500 }));
store.dispatch(addExpense({ description: 'Travel', amount: 5007, createdAt: 1000 }));

// store.dispatch(removeExpense({ id: item1.expense.id }));

// store.dispatch(editExpense(item2.expense.id, { amount: 60000 }));

// store.dispatch(setTextFilter('essen'));
// store.dispatch(setTextFilter('aloha'));

// store.dispatch(sortBy('amount'));

// store.dispatch(setStartDate(225))
// store.dispatch(setEndDate(883))