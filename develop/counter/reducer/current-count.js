const { flux } = require('../flux.js')

flux.reducer(function counterReducer (payload, previous_state={}) {
  switch (payload.action.type) {
    case 'INIT':
        return Object.assign({}, previous_state, { current_count: 0})
    case 'INCREMENT':
        return Object.assign({}, previous_state, { current_count: payload.action.current_count + 1 })
    case 'DECREMENT':
        return Object.assign({}, previous_state, { current_count: payload.action.current_count - 1 })
    case 'SUBMIT_COUNT':
        return Object.assign({}, previous_state, { current_count: 0 })
  }
})