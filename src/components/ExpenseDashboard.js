import React from 'react'
import Expenses from './Expenses/ExpenseList'
import ExpenseFilter from './Expenses/ExpenseFilter'

const ExpenseDashboard = () => (
  <div>
    This is from dashboard
    <ExpenseFilter />
    <Expenses />
  </div>
)

export default ExpenseDashboard