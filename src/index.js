import React from 'react'
import {render} from 'react-dom'
import Route from './routers/router'
import storeConfig from './redux/store/store'
import {addExpense} from './redux/actions/expense'
import {setTextFilter} from './redux/actions/filters'
import visibleExpenses from './redux/storeVisibleExpenses/visibleExpenses'
import {Provider} from 'react-redux'

const store = storeConfig();

store.subscribe(() => {
  const state = store.getState();
  console.log(visibleExpenses(state.expenses, state.filters))
})

store.dispatch(addExpense({description: 'Water bill', amount: 20, createdAt: 5424002}))
store.dispatch(addExpense({description: 'O2 bill', amount: 17, createdAt: 544548}))

setTimeout(() => {
  store.dispatch(addExpense({description: 'food bill', amount: 80, createdAt: 544548}))
}, 2000)
// store.dispatch(setTextFilter('o2'))



const app = (
  <Provider store={store}>
    <Route/>
  </Provider>

)

render(app, document.querySelector('#root'))
