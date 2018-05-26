import { createStore } from 'redux';

const add = ({add = 1} = {}) => ({
  type: 'ADD',
  add
})

const store = createStore((state = {count: 0}, action) => {
  switch (action.type) {
    case 'ADD':
    console.log('adding...')
      return {
        ...state,
        count: state.count + action.add
      }
    default:
      return state  
  }
})

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(add({add: 5}))
store.dispatch(add({add: 10}))
store.dispatch(add())