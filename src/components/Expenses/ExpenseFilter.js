import React from 'react';
import {setTextFilter, sortBy, setStartDate, setEndDate} from '../../redux/actions/filters'
import {connect} from 'react-redux'
import {DateRangePicker} from 'react-dates'

class ExpenseFilter extends React.Component {
  state = {
    calendarFocused: null,
  }


  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate))
    this.props.dispatch(setEndDate(endDate))
  }

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({calendarFocused}))
  }

  render() {
    return (
      <div>
        <h2>Expense Filter</h2>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={(e) => {
          this.props.dispatch(setTextFilter(e.target.value))
        }}/>
        <select
          value={this.props.filters.sortBy}
          onChange={(e) => {
            this.props.dispatch(sortBy(e.target.value))
        }}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker 
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {filters: state.filters}
}

export default connect(mapStateToProps)(ExpenseFilter)