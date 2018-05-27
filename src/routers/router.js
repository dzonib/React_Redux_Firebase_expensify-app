import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ExpenseDashboard from '../components/ExpenseDashboard';

const route = () => (
  <Router>
    <Route path="/" component={ExpenseDashboard} />
  </Router>
);

export default route;