import React from 'react';
import {connect} from 'react-redux'
import ExpenseItem from './ExpenseItem'
import visibleExpenses from '../../redux/storeVisibleExpenses/visibleExpenses'

const ExpenseList = props => {
  
  return (
    <div>
      <h1>Expense List:</h1>
      {props.expenses.map( expense => {
        return <ExpenseItem key={expense.id} {...expense} />
      })}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    expenses: visibleExpenses(state.expenses, state.filters)
  }
}

export default connect(mapStateToProps)(ExpenseList)