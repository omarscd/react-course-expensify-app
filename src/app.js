import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
// import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 87500, note: 'hmmmmmm' }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 120000, note: 'aaaaaaaah', createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Roger Waters', amount: 320000 }));
store.dispatch(addExpense({ description: 'Bill Gates', amount: 420000 }));
store.dispatch(addExpense({ description: 'Rent bill', amount: 350000 }));

// setTimeout(() => {
//   store.dispatch(setTextFilter('water'));
// }, 2000);

// store.dispatch(setTextFilter('bill'));

const { expenses, filters } = store.getState();
console.log(getVisibleExpenses(expenses, filters));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));