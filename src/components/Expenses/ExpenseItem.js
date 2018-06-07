import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const ExpenseItem = ({ amount, createdAt, description, id, dispatch }) => {
  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>Description: {description}</h3>
      </Link>
      <p>Amount: {amount}</p>
      <p>Created: {createdAt}</p>
 
      <hr />
    </div>
  );
};

export default connect()(ExpenseItem);
