import React from 'react';
import {connect} from 'react-redux';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => (
  <div>
    <p>
      Viewing&nbsp;
      {expenseCount}&nbsp;
      {expenseCount === 1 ? 'expense' : 'expenses'} totalling&nbsp;
      {numeral(expensesTotal / 100).format('$0,0.00')}
    </p>
  </div>
);

const mapStateToProps = (state) => {
  const expenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: expenses.length,
    expensesTotal: getExpensesTotal(expenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);