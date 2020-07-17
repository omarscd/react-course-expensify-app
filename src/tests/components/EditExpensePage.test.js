import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = {
    push: jest.fn()
  };
  wrapper = shallow(
    <EditExpensePage
      expense={expenses[1]}
      editExpense={editExpense}
      startRemoveExpense={startRemoveExpense}
      history={history}
    />
  );
})

test('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
  const updates = {
    description: expenses[1].description,
    amount: expenses[1].amount,
    note: expenses[1].note,
    createdAt: expenses[1].createdAt
  };
  wrapper.find('ExpenseForm').prop('onSubmit')(updates);
  expect(history.push).toHaveBeenCalledWith('/');
  expect(editExpense).toHaveBeenCalledWith(expenses[1].id, updates);
});

test('should handle startRemoveExpense', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenCalledWith('/');
  expect(startRemoveExpense).toHaveBeenCalledWith({ id: expenses[1].id });
});