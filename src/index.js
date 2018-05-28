import React from 'react';
import {render} from 'react-dom';
import route from './routers/router'
import storeConfig from './redux/store/store'
import {addExpense} from './redux/actions/expense'

const Router = route();

const store = storeConfig();

console.log(store.getState())

store.dispatch(addExpense({description: 'Water bill', amount: 20, createdAt: 5424002}))

console.log(store.getState())

render(Router, document.querySelector('#root'))