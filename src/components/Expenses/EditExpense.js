import React from 'react';

const EditExpense = (props) => (
  <div>
    <p>Editing Expense with id of {props.match.params.id}</p>
  </div>
)

export default EditExpense