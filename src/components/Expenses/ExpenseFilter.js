import React from 'react';
import {setTextFilter, sortBy} from '../../redux/actions/filters'
import {connect} from 'react-redux'

const ExpenseFilter = (props) => {
  return (
    <div>
      <h2>Expense Filter</h2>
      <input type="text" value={props.filters.text} onChange={(e) => {
        props.dispatch(setTextFilter(e.target.value))
      }}/>
        <select value={props.filters.sortBy} onChange={(e) => {
          props.dispatch(sortBy(e.target.value))
        }}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}


export default connect(mapStateToProps)(ExpenseFilter)