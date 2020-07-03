import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses';
import { removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  onSubmit = (updates) => {
    this.props.editExpense(this.props.expense.id, updates);
    this.props.history.push('/');
  };
  onClick = () => {
    this.props.removeExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <button onClick={this.onClick}>
          Remove
        </button>
      </div>
    );
  };
};

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  editExpense: (id, updates) => dispatch(editExpense(id, updates)),
  removeExpense: (idObj) => dispatch(removeExpense(idObj))
});

 export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);