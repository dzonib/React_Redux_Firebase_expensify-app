import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => (
  <div>
    <h1>Expensify App</h1>
    <Link to="/" exact="true">Dashboard</Link>
    <Link to="/createexpense">Create Expense</Link>
    <Link to="/help">Help</Link>
  </div>
)

export default Header