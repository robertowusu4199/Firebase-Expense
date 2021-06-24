import React from 'react';
import { connect } from "react-redux";
import ExpenseItem from './ExpenseItem';

function ExpenseList(props) {
    console.log('expenses',props.expenses)
    return (
        <div>
            <h1>Expense List</h1>
            
            {props.expenses.map((expense) => (<ExpenseItem expense={expense}  />))}
        </div>
    );
}

function mapStateToProps(state) {
    return {
      expenses:state.expenses,
    }
}
export default  connect(mapStateToProps,{})(ExpenseList);

