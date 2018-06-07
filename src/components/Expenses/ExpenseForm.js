import React, {Component} from 'react';
import moment from 'moment'
import 'react-dates/initialize';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


export default class ExpenseForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      description: '',
      amount: '',
      createdAt: moment(),
      note: '',
      focused: false,
      error: ''
    }
  }


  descriptionHandler = (e) => {
    const description = e.target.value
    this.setState(() => ({description}))
  }

  amountHandler = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({amount}))
    }
  }

  noteHandler = (e) => {
    this.setState({note: e.target.value})
  }

  dateChangeHandler = (createdAt) => {

    createdAt && this.setState(() => ({createdAt}))
  }

  onFocusChange = ({focused}) => {
    this.setState(() => ({focused}))
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description && !this.state.amount) {
      this.setState(() => ({error: 'Please enter expense description and ammount to add expense.'}))
    } else {
      this.setState(() => ({error: ''}))
      this.props.onSubmit({
        description: this.state.description,
        amount: Number(this.state.amount),
        note: this.state.note,
        createdAt: this.state.createdAt.valueOf()
      })
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            autoFocus
            placeholder="Description"
            value={this.state.description}
            onChange={this.descriptionHandler}/>
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.amountHandler}/>
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.dateChangeHandler}
            focused={this.state.focused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
            />
          <textarea
            value={this.state.note}
            onChange={this.noteHandler}
            placeholder="Add a note for your expense (optional)"></textarea>
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}