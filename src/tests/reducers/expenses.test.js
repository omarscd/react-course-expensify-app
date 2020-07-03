import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1234'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    id: '123',
    description: 'test description',
    note: 'note uwu',
    amount: 12345678,
    createdAt: moment()
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense by id', () => {
  const updates = {
    description: 'test description',
    note: 'note uwu',
    amount: 12345678,
    createdAt: moment()
  }
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[2].id,
    updates
  };
  const state = expensesReducer(expenses, action);
  expect(state[2]).toEqual({
    id: expenses[2].id,
    ...updates
  });
});

test('should not edit expense if id not found', () => {
  const updates = {
    description: 'test description',
    note: 'note uwu',
    amount: 12345678,
    createdAt: moment()
  }
  const action = {
    type: 'EDIT_EXPENSE',
    id: '5345',
    updates
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});