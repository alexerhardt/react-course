import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';








const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const one = store.dispatch(addExpense({description: 'Rent', amount: 10000, createdAt: 1000}));
const two = store.dispatch(addExpense({description: 'Coffee', amount: 100, createdAt: -1000}));

// store.dispatch(removeExpense({ id: one.expense.id }));

// store.dispatch(editExpense(two.expense.id, { amount: 500 }));

store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount()); // amount
// store.dispatch(sortByDate());   // date

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));

const demoState = {
  expenses: [{
    id: 'hello',
    description: 'January Rent',
    note: 'Final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};
