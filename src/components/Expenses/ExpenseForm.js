import React, {Component} from 'react';
import moment from 'moment'
import 'react-dates/initialize';
import { SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';



const now = moment();
console.log(now.format('MMM Do, YYYY'))

export default class ExpenseForm extends Component {
  state = {
    description: '',
    amount: 0,
    createdAt: 0,
    note: ''
  }

  descriptionHandler = (e) => {
    const description = e.target.value
    this.setState(() => ({description}))
  }

  amountHandler = (e) => {
    const amount = e.target.value;
    if (amount.match(/^\d{0,}(\.\d{0,2})?$/)) {
      this.setState(() => ({amount}))
    }
  }

  noteHandler = (e) => {
    this.setState({note: e.target.value})
  }

  render() {
    return (
      <div>
        <form>
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