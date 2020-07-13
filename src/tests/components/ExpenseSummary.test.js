import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render ExpensesSummary correctly' , () => {
  const wrapper = shallow(
    <ExpensesSummary
      expenseCout={2}
      expensesTotal={9434}
    />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with one expense correctly' , () => {
  const wrapper = shallow(
    <ExpensesSummary
      expenseCout={1}
      expensesTotal={9434}
    />
  );
  expect(wrapper).toMatchSnapshot();
});