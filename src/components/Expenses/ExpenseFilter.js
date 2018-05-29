import React from 'react';
import {setTextFilter} from '../../redux/actions/filters'
import {connect} from 'react-redux'

const ExpenseFilter = (props) => {
  console.log(props)
  return (
    <div>
      <h2>Expense Filter</h2>
      <input type="text" value={props.filters.text} onChange={(e) => {
        props.dispatch(setTextFilter(e.target.value))
}}/>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}


export default connect(mapStateToProps)(ExpenseFilter)