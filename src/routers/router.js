import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ExpenseDashboard from '../components/ExpenseDashboard';
import AddExpense from '../components/AddExpense'
import NotFound from '../components/NotFound'
import Header from '../components/Header'
import Help from '../components/Help'

const route = () => (
  <Router>
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={ExpenseDashboard}/>
        <Route path="/createexpense" component={AddExpense}/>
        <Route path="/help" component={Help}/>
        <Route component={NotFound}></Route>
      </Switch>
    </div>
  </Router>
);

export default route;